const express = require('express');
const router = express.Router();
const authorization = require('../controllers/authorization');


router.post('/', authorization.logout);

module.exports = router;