const joi = require('joi');

const usernameRegEx = /^[A-Za-z0-9]{3,20}$/;
const passwordRegEx = /^[A-Za-z0-9]{3,20}$/;

exports.userSchema = joi.object({
    username: joi.string().pattern(usernameRegEx).required(),
    password: joi.string().pattern(passwordRegEx).required(),
    confirm: joi.string(),
  });