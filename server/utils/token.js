const jwt = require("jsonwebtoken");

const createToken = (payload) => {
	if (!payload) return;
	try {
		return jwt.sign(payload, process.env.TOKEN_KEY);
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = createToken;
