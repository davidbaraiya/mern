const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controllers/contactController");

contactRouter.route("/contact").post(contactController.contact);

module.exports = contactRouter;
