const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
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

    res.status(201).json({
      message: "register successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(500).json({ message: "email not register" });
    }
    const user = await isUserExist.passwordCompare(password);

    if (user) {
      res.status(200).json({
        message: "login successfull",
        token: await isUserExist.generateToken(),
        id: isUserExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "password does not match" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = { home, register, login };
