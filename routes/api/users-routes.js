const router = require('express').Router();

//Set requirements (from users-controller)
const {
    getAllUsers,
    getUserById,
    deleteUser,
    createUser
} = require('../../controllers/users-routes');


module.exports = router;