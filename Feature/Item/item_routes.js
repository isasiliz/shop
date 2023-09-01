const Routes = require('express')
const { getItem, createItem, updateItem, deleteItem, deleteAll} = require('./item_controller')
const routes = Routes()
const {check} = require('express-validator')
const validationResult = require('../../Middleware/check_validation_result')
const checkUniqueColor = require('../../Middleware/check_unique_color')

routes.get('/item', getItem )

routes.post('/item',[
    check ('color').custom(checkUniqueColor),
    validationResult
], createItem)


routes.put('/item',[
    check ('color').custom(checkUniqueColor),
    validationResult
], updateItem)


routes.delete('/item', deleteItem)

routes.delete('/item-delete-all', deleteAll)

module.exports = routes
