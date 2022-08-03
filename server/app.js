const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const apiRouter = require("./routes/api");
const connectDB = require("./db");

require("dotenv").config();

const PORT = process.env.PORT || 7500;

connectDB();
app.use(cors());

app.use("/api", apiRouter);

app.use(express.static(path.join(__dirname, "./../build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./../build", "index.html"));
});

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
