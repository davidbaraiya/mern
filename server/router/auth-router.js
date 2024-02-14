const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const singUpSchema = require("../validators/auth-validator");

router.route("/").get(authController.home);
router.route("/register").post(validate(singUpSchema), authController.register);
router.route("/login").post(authController.login);

module.exports = router;
