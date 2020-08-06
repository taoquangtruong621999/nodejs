var express = require('express');
var router = express.Router();
var controller=require('../controller/user.controller.js');
var validate = require('../validate/user.validate');
var authMiddleware=require('../middlewares/auth.middleware.js');
/* GET users listing. */
router.get('/',authMiddleware.requireAuth ,controller.index);
router.get('/seach', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.get);
router.post('/create',validate.postCreate,controller.postCreate);
module.exports = router;