const Item = require('./item_model')


const getItem = async function (req, res) {

    try {
        const [items, count] = await Promise.all([
            await Item.find(),
            await Item.countDocuments()
        ])
        res.json({ items, count })

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'something went wrong.'
        })
    }
}

const createItem = async function (req, res) {
    const body = req.body


    if (!body.user) {
        return res.status(400).json({
            status: 400,
            message: 'bad request.'
        })
    }

    try {
        const newItem = Item(body)
        const savedItem = await newItem.save()
        res.json(savedItem)
    } catch (error) {
        res.status(500).json(error)
    }

}
const updateItem = async function (req, res) {

    const body = req.body
    const id = req.query.id
    const { isEnabled, isVerified, user, ...bodyFilter } = body //crea un nuevo body sin los que estan en {}
    const options = {
        new: true
    }

    try {
        const updateItem = await Item.findByIdAndUpdate(id, bodyFilter, options)
        res.json(updateItem)

    } catch (error) {
        res.status(500).json(error.message)
    }

}
const deleteItem = async function (req, res) {
    const id = req.query.id
    try {
        const deleteItem = await Item.findByIdAndDelete(id)
        res.json(deleteItem)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteAll = async function (req, res) {
    
    try {
         await Item.deleteMany()
        res.json('Success')

    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { getItem, createItem, updateItem, deleteItem, deleteAll }
