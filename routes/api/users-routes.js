const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUsers,
    deleteUser,
    addFriend,
    deleteFriend

} = require('../../controllers/usersController');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllUsers);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getUserById).put(updateUsers).delete(deleteUser);

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createUser);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addFriend);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteFriend);

module.exports = router;