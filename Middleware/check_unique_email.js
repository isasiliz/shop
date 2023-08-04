const User = require('../Feature/User/user_model')

const checkUniqueEmail = async (email = '') => {
    const user = await User.findOne({email: email})

    if (user) {
        throw new Error ('Email already registered')
    }
}
module.exports = checkUniqueEmail