const Routes  = require('express')
const routes = Routes()
const multer = require('multer')
const {uploadFile, downloadFile} = require('./storage_controller')


const upload = multer ({
    storage: multer.memoryStorage(),
    limits: {fileSize:10*1024*1024}, //10MB
})

routes.post('/upload',upload.single('file'), uploadFile),

routes.get('/download', downloadFile)  

module.exports = routes
