const { body, check } = require('express-validator');

module.exports = {
  create: () => {
    return [
      check("name", "Name is required!").not().isEmpty(),
      check("email", "email is required!").not().isEmpty(),
      check("phone", "phone is required!").not().isEmpty(),
    ]
  },
}