import Joi from "joi";

const loginValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const registerValidation = Joi.object({
  name: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirm_password: Joi.string().min(6).required(),
});

export { loginValidation, registerValidation };