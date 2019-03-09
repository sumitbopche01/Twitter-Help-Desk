const router = require('express').Router();
const userController = require('../controllers/user');

router.route('/user/registration')
    .post(userController.add);

router.route('/user/login')
    .post(userController.login);
