const User = require('../Model/user_model')

const checkUniqueUsername = async (username='') => {
    const user = await User.findOne({username: username})

    if (user) {
        throw new Error('te equivostaste de username')
    }
}

module.exports = checkUniqueUsername
