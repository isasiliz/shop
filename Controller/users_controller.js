
const getUser = function (req, res) {
    res.json('Hello WorldB')
}

const createUser = function (req, res) {
    res.json('Hello WorldA')
}

const updateUser = function (req, res) {
    res.json('Hello World3')
}
const deleteUser = function (req, res) {
    res.json('Hello World4')
}

module.exports = { getUser, createUser, updateUser, deleteUser }

