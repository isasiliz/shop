const User = require('../../Feature/User/user_model')
const bcrypt = require('bcrypt')
const jsonwwbtoken = require('jsonwebtoken');

const doLogin = async function (req, res) {
    const {email, password} = req.body
    
    const user = await User.findOne({email: email})

    if (!user) {
        return res.status(400).json({
            message: 'user or password is incorrect'
        })
    }

   const isValid = await bcrypt.compare(password, user.password)
   if (!isValid) {
        return res.status(400).json({
            message: 'user or password is incorrect'
        })
   }

   const token = jsonwwbtoken.sign({ stock: user._id }, 'Authorization', { expiresIn: 60 * 5 });

   res.json({
        user: user,
        token: token
   })
}

module.exports = {doLogin}