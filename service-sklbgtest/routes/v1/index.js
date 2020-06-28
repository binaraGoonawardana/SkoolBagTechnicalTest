const express = require('express');
const schoolRoutes = require('./school');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/schools
 */
router.use('/schools', schoolRoutes);

module.exports = router;
