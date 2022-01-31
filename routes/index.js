const router = require('express').Router();

 const apiRoutes = require('./api');

// add prefix of /api to all of the api routes
router.use('/api', apiRoutes);


module.exports = router;