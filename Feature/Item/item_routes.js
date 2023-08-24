const Routes = require('express')
const { getItem, createItem, updateItem, deleteItem } = require('./item_controller')
const routes = Routes()

routes.get('/item', getItem )

routes.post('/item', createItem)

routes.put('/item', updateItem)

routes.delete('/item', deleteItem)

module.exports = routes
