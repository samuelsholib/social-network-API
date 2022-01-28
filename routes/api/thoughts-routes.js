const router = require('express').Router();
const {
    getAllThouts,
    getThoughtById,
    createThought,
    deleteThought
} = require('../../controllers/thought-routes')

module.exports = router;