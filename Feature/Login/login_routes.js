const Routes = require('express')
const routes = Routes()
const {doLogin} = require('./login_controller')

routes.post('/login', doLogin)

module.exports = routes