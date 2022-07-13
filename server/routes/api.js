const express = require("express");

const authRouter = require("./auth");

const router = express.Router();

router.use(express.json());

router.use("/auth", authRouter);

router.all("*", (req, res) => {
	res.send("Invalid endpoint");
});

module.exports = router;
