const User = require('../Model/user_model')
const bcrypt = require('bcrypt')
const { request, response } = require('../Routes/users_routes')

const getUser = async function (req = request, res = response) {

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
    const newUser = User(body)

    if (!body.username || !body.email || !body.password || !body.role ) {
        return res.status(400).json({
            status: 400,
            message: 'bad request.'
        })
    }

    try {
        const savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }

}

const updateUser = function (req, res) {
    res.json('Hello World3')
}
const deleteUser = function (req, res) {
    res.json('Hello World4')
}

module.exports = {getUser, createUser, updateUser, deleteUser}

