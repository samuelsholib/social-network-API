const router = require('express').Router();


const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughts,
    deleteThought,
    addReaction,
    deleteReaction,

} = require('../../controllers/thoughtsController');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getThoughtById).put(updateThoughts).delete(deleteThought);

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createThought);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;