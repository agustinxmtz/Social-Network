
const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// api/thoughts/
// GET all, CREATE
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// api/thoughts/<thoughtId>
// GET one, UPDATE, REMOVE
router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(removeThought);

// api/thoughts/<thoughtId>/reactions
// ADD reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// api/thoughts/<thoughtId>/reactions/<reactionId>
// REMOVE reaction
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;
