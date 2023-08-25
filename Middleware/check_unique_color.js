const Color = require ('../Feature/Color/color_model')

const checkUniqueColor = async (_id = '') => {
    const color = await Color.findById (_id)
    if (!color) {
        throw new Error ('this color does not exist')
    }
}
module.exports = checkUniqueColor 