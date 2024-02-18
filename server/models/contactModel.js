const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
});

// create a collection of contact
const Contact = new mongoose.model("Contact", contactModel);

module.exports = Contact;
