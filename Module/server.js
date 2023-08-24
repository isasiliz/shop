const express = require('express')
const mongoose = require('mongoose')
const app = express()

class Server {
    constructor () {
        this.app = app
        this.middleware()
        this.routes()
    }

    middleware () {
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/', require('../Feature/User/users_routes'))
        this.app.use ('/', require('../Feature/Login/login_routes'))
        this.app.use ('/', require ('../Feature/Item/item_routes'))
    }

    start() {
        this.app.listen(1995,() => {
            console.log ('Server is open')
            this.connectDB()
        }
    )}
    
    async connectDB() {
        try {
            await mongoose.connect('mongodb+srv://lizcisasi:wTMwuvnafcffNoVF@cluster0.di2p8m8.mongodb.net/shop')
            console.log ('Are you connected')  
        } catch (error) {
            console.log(error)
        }
    }             
}
       
module.exports = Server