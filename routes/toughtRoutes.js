const router = require('express').Router();
const {
    getAllThoughts,
    findThoughtById,
    addThoughts,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../controllers')