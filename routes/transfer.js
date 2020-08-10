var express = require('express');
var router = express.Router();
var controller = require('../controller/transfer.controller.js');
/* GET home page. */
router.get('/', controller.index);

module.exports = router;