const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId,name) => {
  return jwt.sign({ userId,name }, process.env.JWT_SECRET,{expiresIn:"3h"}); 
};

module.exports = { generateToken };