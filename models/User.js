const { Schema, Model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: trim
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator(validEmail) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
                    validEmail
                );
            },
            message: "please enter a valid email"
        },
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        reference: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        reference: 'User'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false

});
// get total count of friends
userSchema.virtual('friendCount').get(function() {
        return this.friends.length
    })
    // Create User model using User Schema
const User = model('User', userSchema)

module.exports = User;