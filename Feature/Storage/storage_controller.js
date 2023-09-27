//shop-94bad-firebase-adminsdk-u0t9b-afeddaec28.json

const admin = require("firebase-admin")
const serviceAccount = require('../../shop-94bad-firebase-adminsdk-u0t9b-afeddaec28.json')
const path = require('path')
const fs = require('fs')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://shop-94bad.appspot.com' // URL de tu Firebase Storage
})
const bucket = admin.storage().bucket()

const uploadFile = async function (req, res) {
  const fileBuffer = req.file.buffer
  const filepath = req.query.filepath
  const file = bucket.file(`${filepath}`)
  try {
    //Save the file to the bucket
    await new Promise((resolve, reject) => {
      file.save(fileBuffer, (err) => {
        if (err) reject(err)
        else resolve()
      })
    })
    //Generate a signed URL for the file
    const [signedUrl] = await file.getSignedUrl({
      action: 'read',
      expires: '12-31-2077'
    })

    res.status(200).json({
      url: signedUrl //The url to access the file
    })

  } catch (error) {
    console.error('Failed to upload file', error.menssage);
    res.status(500).json({
      tittle: '500_ERROR',
      message: error.message
    });
  }
}

const downloadFile = async function (req, res) {
  const filepath = req.query.filepath;
  const file = bucket.file(filepath);

  try {
    // Verificar si el archivo existe
    const [exists] = await file.exists();
    if (!exists) {
      return res.status(404).json({
        title: 'File Not Found',
        message: 'The specified file does not exist.',
      });
    }
    // Descargar el archivo
    const [fileData] = await file.download();

    // Enviar la imagen en formato data
    const ext = path.extname(filepath);
    let contentType

    switch (ext) {
      case '.pdf':
        contentType = 'application/pdf'
        break;
      case '.png':
        contentType = 'image/png'
        break;
      case '.jpeg', 'jpg':
        contentType = 'image/jpeg'
        break;
      case '.json':
        contentType = 'application/json' //Content type for JSON files
        break;
      default:
        contentType = 'application/octet-stream'; //Generic binary data
    }
    res.setHeader('Content-Type', contentType);
    res.status(200).send(fileData);

  } catch (error) {
    console.error('Failed to download file', error.message);
    res.status(500).json({
      title: '500_ERROR',
      message: error.message,
    });
  }
};

module.exports = { uploadFile, downloadFile }