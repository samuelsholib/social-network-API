const { User } = require('../models');

// setUp Users Controller
const userRoutesController = {
    // route to get all of the users
    getAllUsers(req, res) {
        User.find({})
            .populate({ path: 'thoughts', select: '-__v' })
            .select('-__v')
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User found with this id!!!' });
                    return;
                }
                res.json(dbUsersData)
            })
            .catch(err => res.json(err));


    },

    //Create a new User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => res.status(500).json(err));
    },

    // Update Users
    updateUsers({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User found with this id' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.json(err))


    },
    // find and delete a User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User found with this id' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(500).json(err));
    },

    //add friends
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { pull: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User found with this id' })
                    return;
                }
                res.json(dbUsersData)
            })
            .catch(err => res.status(500).json(err));
    },
    //delete an existing friend
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this particular ID!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(400).json(err));
    }

}
module.exports = userRoutesController;