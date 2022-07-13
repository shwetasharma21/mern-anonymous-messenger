const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const hashPassword = (pass) => {
	if (!pass) return;
	try {
		return bcrypt.hash(pass, SALT_ROUNDS);
	} catch (err) {
		console.log(err);
	}
};

const verifyPassword = (pass, hash) => {
	if (!pass || !hash) return;
	try {
		return bcrypt.compare(pass, hash);
	} catch (err) {
		console.log(err);
	}
};

module.exports.hashPassword = hashPassword;
module.exports.verifyPassword = verifyPassword;
