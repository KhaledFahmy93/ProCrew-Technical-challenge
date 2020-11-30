const router = require('express').Router();
const UserController = require('./UserController');
const userService = require('../services/MQService');
const RouteConstant = require('../constant/Routes');
const Validation = require('../validation/UserValidation')

module.exports = (app) => {
  router.route('/user')
    .post(
      Validation.create(),
      UserController.createUser
    );
    
  app.use(
    RouteConstant.USER,
    router
  );
};