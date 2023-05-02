const Routes = require('express')
const routes = Routes()
const { getUser,createUser, updateUser, deleteUser } = require ('../Controller/users_controller')

routes.get('/user', getUser)
    
routes.post('/user', createUser)
  
routes.put('/user', updateUser)
  
routes.delete('/user', deleteUser)

module.exports = routes