const express = require('express');
const router = express.Router();

const TEST_CONTROLLER = require('../controllers/test.controller.js');

router.get('/', TEST_CONTROLLER);

module.exports = router;