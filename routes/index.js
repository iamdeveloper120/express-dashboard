/**
 * require express router
 * create controllers as many as you can in controller directory
 * require all controllers below just like '../controllers/controllerName'
 * create route like router.get('address', controller.function)
 * -----------------------------------------------------------------------
 */

var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
router.get('/', userController.index);
router.get('/login', userController.login);
router.get('/signup', userController.signup);
router.get('/forgot-password', userController.forgotPassword);

module.exports = router;
