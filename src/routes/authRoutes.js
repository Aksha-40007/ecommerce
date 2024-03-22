const express = require("express");
const router = express.Router();

const {register,login} = require("../controllers/authController");
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require("../validators/authValidators");

router.post("/register",validateSignupRequest,isRequestValidated,register);
router.post("/login",validateSigninRequest,isRequestValidated,login);

module.exports = router;    