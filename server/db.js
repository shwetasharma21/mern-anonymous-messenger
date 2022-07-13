const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log("Connected to mongodb");
		mongoose.connection.on("disconnected", () => {
			console.log("Disconnected from mongodb");
		});
		process.on("SIGINT", () => {
			mongoose.disconnect(() => {
				console.log("MongoDB disconnected before app termination");
				process.exit(0);
			});
		});
	} catch (err) {
		console.log("Error occurred while connecting to mongodb", err);
	}
};
module.exports = connectDB;
