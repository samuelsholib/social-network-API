const { Thoughts, User } = require('../models');

const thoughtsRoutes = {
    // get all thoughts
    getAllThouts(req, res) {
        Thoughts.find({})
            .populate({ path: 'reaction', select: '-__v' })
            .select('-__v')
            .then(dbThoughtsData => res.json(dbThoughtsData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // get a thought by ID
    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .populate({ path: 'reactions', select: '-__v' })
            .select('-__v')
            .then(dbThoughtsData => {
                if (!dbThoughtsData) {
                    res.status(404).json({ message: 'No thought found with this id!!!' });
                    return;
                }
                res.json(dbThoughtsData)
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })

    }

}

module.exports = thoughtsRoutes;