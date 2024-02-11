const User = require("../models/user-model");

// home controller
const home = async (req, res) => {
  try {
    res.status(200).send("router path controller");
  } catch (error) {
    console.log(error);
  }
};

// register controller
const register = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "email already registed" });
    }

    const userCreated = await User.create({
      userName,
      email,
      phone,
      password,
    });

    res.status(201).json({ user: userCreated });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log("server error");
  }
};

module.exports = { home, register };
