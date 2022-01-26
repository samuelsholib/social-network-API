const { Schema, Model, Types } = require('Mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.objectID,
        default: () => new Types.objectID(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM, DD, YYYY [at] hh:mm a')
    }
}, {
    toJSON: {
        getters: true
    }
})

const ThoughtsSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
})

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});
// Create Thought model using thoughts Schema
const Thoughts = model('Thoughts', ThoughtsSchema)

// export Thoughts model
module.exports = Thoughts;