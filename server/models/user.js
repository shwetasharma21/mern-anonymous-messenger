const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, maxlength: 256, unique: true },
	pass: { type: String, required: true },
	isVerified: { type: Boolean, default: false },
});

const User = model("User", userSchema);
module.exports = User;
