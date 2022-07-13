const express = require("express");

const { registerSchema, loginSchema } = require("../validation/auth");
const User = require("../models/user");
const { hashPassword, verifyPassword } = require("../utils/hash");
const createToken = require("../utils/token");

const router = express.Router();

router.post("/register", async (req, res) => {
	try {
		const { value, error } = registerSchema.validate(req.body);
		if (error) throw error;

		const hashedPass = await hashPassword(value.pass);
		if (!hashedPass)
			return res
				.status(500)
				.json({ success: false, message: "Internal server error" });

		const user = new User({
			name: value.name,
			email: value.email,
			pass: hashedPass,
		});

		const result = await user.save();

		const payload = {
			email: result.email,
			id: result._id,
			name: result.name,
			isVerified: result.isVerified,
		};

		const token = createToken(payload);
		if (!token)
			return res.status(500).json({
				success: false,
				message: "Error occurred while registering",
			});

		res.json({ success: true, message: "Register successful", token });
	} catch (err) {
		console.log(err);

		if (err.code === 11000)
			return res
				.status(400)
				.json({ success: false, message: "Duplicate email" });
		res.status(400).json({ success: false, message: err.message });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { value, error } = loginSchema.validate(req.body);

		if (error) throw error;

		const user = await User.findOne({ email: value.email });
		if (!user)
			return res
				.status(404)
				.json({ success: false, message: "Email or password is invalid" });

		const result = await verifyPassword(value.pass, user.pass);
		if (!result)
			return res
				.status(404)
				.json({ success: false, message: "Email or password is invalid" });

		const payload = {
			email: user.email,
			id: user._id,
			name: user.name,
			isVerified: user.isVerified,
		};

		const token = createToken(payload);
		if (!token)
			return res.status(500).json({
				success: false,
				message: "Error occurred while logging in",
			});

		res.json({ success: true, message: "Login successful", token });
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ success: false, message: err.message });
	}
});

module.exports = router;
