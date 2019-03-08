const userController = require('../controllers/user');

module.exports = (router) => {

    router.route('/user/registration')
        .post(userController.add);

    router.route('/user/login')
        .post(userController.login);

};

