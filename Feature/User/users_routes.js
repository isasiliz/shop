const Routes = require('express')
const routes = Routes()
const {getUser,createUser, updateUser, deleteUser, deleteAll} = require ('./users_controller')
const {check} = require('express-validator')
const checkValidationResult = require('../../Middleware/check_validation_result')
const checkUniqueEmail = require('../../Middleware/check_unique_email')
const checkUniqueRole = require('../../Middleware/check_unique_role')
const checkUniqueUsername = require('../../Middleware/check_unique_username')
const verifyToken = require('../../Middleware/verifyToken')

routes.get('/user', getUser)  //verifyToken va adentro 
    
routes.post('/user', [
  //  check ('username', 'Invalid username').isLength({min:6,max:8}),
    check ('role').custom(checkUniqueRole),
    check ('username').custom(checkUniqueUsername),
    //check ('email','Invalid email').isEmail(),
   // check ('email').custom(checkUniqueEmail),
   // check ('password','The password must comply with at least one uppercase, lowercase, one special character, and one number.').isStrongPassword({
   //     minLength: 8,
   //     minLowercase: 1,
   //     minUppercase: 1,
   //     minNumbers: 1,
   //     minSymbols: 1,
 //   }),
    checkValidationResult

], createUser)
  
routes.put('/user', [verifyToken,
    check ('username', 'Invalid username').isLength({min:6,max:8}),
    check ('username').custom(checkUniqueUsername),
    checkValidationResult

], updateUser)

routes.delete('/user', deleteUser)

routes.delete('/user-delete-all', deleteAll)

module.exports = routes