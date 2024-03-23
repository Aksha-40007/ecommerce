const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/authUtils');
const { errorHandler } = require('../utils/errorHandler');
const { validationResult } = require('express-validator');


const register = async (req, res) => {
  try {
    const { name, email, mobno, password } = req.body;
    const user = new User({ name, email, mobno, password });
    await user.save();
    const token = generateToken({ userId: user._id ,name});
    res.status(201).json({message:"User registered successfully", token });
  } catch (error) {
    errorHandler(res, 500, error.message);
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, mobno, password } = req.body;
    let user;
    if (email) {
      user = await User.findOne({ email });
    } else if (mobno) {
      user = await User.findOne({ mobno });
    }

    if (!user) {
      throw new Error('User not registered. Please register before login!!');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken({ userId: user._id, name:user.name});
    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    errorHandler(res, 401, error.message);
  }
};



module.exports = { register, login };
