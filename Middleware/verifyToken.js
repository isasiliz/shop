const { request, response } = require('express')
const jsonwebtoken = require('jsonwebtoken')

const verifyToken = (req = request, res=response, next) => {
    const {authorization} = req.headers

    jsonwebtoken.verify(authorization, 'Authorization', (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: error.message
            })
        }

        next()
    })
}

module.exports = verifyToken