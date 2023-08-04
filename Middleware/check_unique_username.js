const User = require('../Feature/User/user_model')

const checkUniqueUsername = async (username='') => {
    const user = await User.findOne({username: username})

    if (user) {
        throw new Error('te equivostaste de username')
    }
}

module.exports = checkUniqueUsername
