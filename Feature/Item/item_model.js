const {Schema , model} = require ('mongoose')

const ItemSchema = new Schema ({
    name: {
     type: String,
     required: [true, ('upload item name')]
    },
    price: {
        type: Number,
        required: true,
    },
    isEnabled: {
        type: Boolean,
        default: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, ('user id is required')],
    },
    
   
}, {timestamps: true})

ItemSchema.methods.toJSON = function() {
    const {__v, ...cleanItem} = this.toObject()
    return cleanItem
}

module.exports = model('item', ItemSchema)

/*

//para saber cuando fue creado el item ej auditoria etc
createdAt: {
    type: Date,
    required: true,
    default: Date.now()
},
updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
}
esto fue reemplazado por timestamps: true
*/