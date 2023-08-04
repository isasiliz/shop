const User = require('./user_model')
const bcrypt = require('bcrypt')

const getUser = async function (req, res) {

    try {
        const [users, count] = await Promise.all([
            await User.find(),
            await User.countDocuments()     
        ])
        res.json({users, count})
            
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'something went wrong.'
        })
    }
}

const createUser = async function (req, res) {
    const body = req.body
   

    if (!body.username || !body.email || !body.password || !body.role ) {
        return res.status(400).json({
            status: 400,
            message: 'bad request.'
        })
    }

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
        body.password = hashedPassword
        const newUser = User(body)
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }

}

const updateUser =  async function (req, res) {
    
    const body = req.body
    const id = req.query.id
    const {email, password, isEnabled, isVerified, role, ...bodyFilter } = body
    const options = {
        new: true
    }

    try {
        const updateUser = await User.findByIdAndUpdate (id, bodyFilter, options)
        res.json(updateUser)
        
    } catch (error) {
        res.status(500).json (error.message)
    }

}
const deleteUser = function (req, res) {
    res.json('Hello World4')
}

module.exports = {getUser, createUser, updateUser, deleteUser}

