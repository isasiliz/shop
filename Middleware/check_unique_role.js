const Role = require ('../Model/role_model')

const checkUniqueRole = async (rolename = '') => {
    const role = await Role.findOne ({name: rolename})
    if (!role) {
        throw new Error ('this role does not exist')
    }
}
module.exports = checkUniqueRole 