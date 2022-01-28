const router = require('express').Router();

const thoughtsRoutes = require('./api/thoughts-routes');
const usersRoutes = require('./api/users-routes');

router.use('/api/thoughts', thoughtsRoutes)
router.use('/api/users', usersRoutes);

router.use((req, res) => {
    res.status(404).send('404 Error... route not found');
});
module.exports = router;