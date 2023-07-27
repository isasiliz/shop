const {validationResult} = require ('express-validator')

const checkValidationResult = (req, res, next) => {

    const errors = validationResult (req)

    if (!errors.isEmpty()) {
        return res.status (400).json(errors)
    }
    next ()
    //que funcion cumple el next aca?
}

module.exports = checkValidationResult