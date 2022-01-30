const router = require('express').Router();

const apiRoutes = require('./api/thoughts-routes');

router.use('/', apiRoutes);

router.use((req, res) => {
    res.status(404).send('404 Error... route not found');
});
module.exports = router;