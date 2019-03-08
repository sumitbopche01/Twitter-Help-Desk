const User = require('../models/users');
const bcrypt = require('bcrypt');

const add = (req, res, next) => {
    let result = {};
    let status = 201;

    const { name, password } = req.body;
    const user = new User({name, password}); //Document instace of a model

    user.save((err, user) => {
        if(!err){
            result.status = status;
            result.result = user;
        }
        else{
            status = 500;
            result.status = status;
            result.error = err;
        }
        res.status(status).send(result);
    })
}

const login = (req, res, next) => {

    const { name, password } = req.body;

    let result = {};
    let status = 200;

    User.findOne({name}, (err, user) => {
        if(!err && user){
            bcrypt.compare(password, user.password)
            .then(match => {
                if(match){
                    status = 200;
                    result.result = user;
                }
                else{
                    status = 401;
                    result.status = status;
                    result.error = 'Authentication error'
                }
                res.status(status).send(result);
            })
            .catch((error) => {
                status = 500;
                result.status = status;
                result.error = error;
                res.status(status).send(result);
             });
        }
        else{
            status = 404;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
        }
    })
}

module.exports = { add, login };
