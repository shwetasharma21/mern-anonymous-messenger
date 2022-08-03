const Joi = require("joi");

const registerSchema = Joi.object({
	name: Joi.string()
		.required()
		.trim()
		.min(3)
		.max(30)
		.error(() => new Error("Invalid name")),
	email: Joi.string()
		.email()
		.required()
		.trim()
		.error(() => new Error("Invalid Email")),
	pass: Joi.string()
		.required()
		.error(() => new Error("Invalid Password")),
	cpass: Joi.string()
		.valid(Joi.ref("pass"))
		.error(() => new Error("Passwords must be matching")),
});
const loginSchema = Joi.object({
	email: Joi.string()
		.email()
		.required()
		.trim()
		.error(() => new Error("Invalid Email")),
	pass: Joi.string()
		.required()
		.error(() => new Error("Invalid Password")),
});

module.exports.registerSchema = registerSchema;
module.exports.loginSchema = loginSchema;
