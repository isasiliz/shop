const {Schema, model} = require('mongoose')

const ColorSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    code: {
        type: String,
        unique: true,
        required: true,
    },
    isEnabled: {
        type: Boolean,
        default: true,
    },
})

module.exports = model('color', ColorSchema)