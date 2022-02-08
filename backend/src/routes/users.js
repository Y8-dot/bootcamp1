const {Router} = require('express')
const router = Router()

const  {getUser, createUser, getUsuario, deleteUser, updateUser} = require('../controller/user.controller')

router.route('/')

    .get(getUser)
    .post(createUser)

router.route('/:id')
    .get(getUsuario)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;