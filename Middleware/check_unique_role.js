const Role = require ('../Feature/Role/role_model')

const checkUniqueRole = async (_id = '') => {
    const role = await Role.findById (_id)
    if (!role) {
        throw new Error ('this role does not exist')
    }
}
module.exports = checkUniqueRole 