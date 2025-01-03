const { Router } = require("express");

const router = Router();

// Use similar lines for all api route categories.
const exampleRouter = require("./example");
router.use("/example", exampleRouter);

const authRouter = require("./auth");
router.use("/auth", authRouter);

module.exports = router;
