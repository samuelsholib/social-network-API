// requireExpress Router
const router = require('express').Router();

// Set routes 
const thoughtsRoutes = require('./thoughts-routes');
const usersRoutes = require('./users-routes');

// use routes
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

// export router
module.exports = router;