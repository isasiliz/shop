const {Schema, model} = require('mongoose')

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.'],   
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required.'],
    },
    password: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    role: {
        type: String,
        required: true,
    },
    isEnabled: {
        type: Boolean,
        default: true,
    },
    IsVerified: {
        type: Boolean,
        default: false,
    },
})
//para ocultar contraseñas u otras cosas
UserSchema.methods.toJson = function () {
    const { __v,password,...cleanUser} = this.toObject();
    return cleanUser
}

module.exports = model('user', UserSchema)