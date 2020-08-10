var express = require('express');
var router = express.Router();
var controller = require('../controller/cart.controller');

/* GET home page. */
router.get('/add/:productId', controller.addtoCart);

module.exports = router;