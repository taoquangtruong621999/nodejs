var express = require('express');
var multer = require('multer');

var router = express.Router();
var controller = require('../controller/user.controller.js');
var validate = require('../validate/user.validate');
//var authMiddleware = require('../middlewares/auth.middleware.js');
var upload = multer({ dest: './public/uploads/' });
/* GET users listing. */
router.get('/', controller.index);
router.get('/seach', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.get);
router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate);
module.exports = router;