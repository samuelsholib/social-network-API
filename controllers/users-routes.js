const { User } = require('../models');
const { db } = require('../models/User');
const router = require('express').Router();

//get route to get
router.get('/users', (req, res) => {
    db.collection('toughtsDB')
        .find({})
        .toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
});

// Set up Users controller

const usersRoutes = {
    // route to get all of the users
    getAllUsers(req, res) {
        User.find({})
            .populate({ path: 'reaction', select: '-__v' })
            .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No User found with this id!!!' });
                    return;
                }
                res.json(dbThoughtsData)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })

    },

    //Create a new User
    createUser({ body }, res) {
        User.createUser(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(500).json(err));

    },
    // find and delete a User
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },
}
module.exports = router;
module.exports = usersRoutes;