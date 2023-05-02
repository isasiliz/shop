const express = require('express')
const mongoose = require ('mongoose')
const app = express()

class Server {
    constructor (){
        this.app = app
        this.routes()
        this.start()
    }

    routes(){
        this.app.use('/', require('../Routes/users_routes'))
    }

    start() {
        this.app.listen(1995,() => {
            console.log ('Server is open')
            this.conectarBasededatos()
        }
    )}
    
    async conectarBasededatos() {
        try {
            await mongoose.connect('mongodb+srv://lizcisasi:wTMwuvnafcffNoVF@cluster0.di2p8m8.mongodb.net/shop')
            console.log ('Are you connected')  
        } catch (error) {
            console.log(error)
        }
    }             
}
       

    




module.exports = Server