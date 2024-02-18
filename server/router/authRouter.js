const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");
const validate = require("../middlewares/validateMiddleware");
const singUpSchema = require("../validators/authValidator");

authRouter.route("/").get(authController.home);
authRouter
  .route("/register")
  .post(validate(singUpSchema), authController.register);
authRouter.route("/login").post(authController.login);

module.exports = authRouter;
