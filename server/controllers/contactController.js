const Contact = require("../models/contactModel");

const contact = async (req, res) => {
  const { userName, email, message } = req.body;
  try {
    const isContactExist = Contact.findOne(email);

    if (isContactExist) {
      return res.status(404).json({ message: "email already exist" });
    }

    const contactCreate = await Contact.create({
      userName,
      email,
      message,
    });

    if (contactCreate) {
      res
        .status(201)
        .json({ message: "send successful", contact: contactCreate });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  contact,
};
