const {body, oneOf, validationResult} = require('express-validator'); 

// Validation rules for user registration
exports.validateSignupRequest = [
    body('name').notEmpty().withMessage('Name is required').trim(),
    body('mobno').notEmpty().isMobilePhone().withMessage('Invalid mobile number').trim(),
    body('email').notEmpty().isEmail().withMessage('Invalid email').trim(),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim()
];


exports.validateSigninRequest = [
    oneOf([
        body('email').notEmpty().isEmail().withMessage('Invalid email').trim(),
        body('mobno').notEmpty().isMobilePhone().withMessage('Invalid mobile number').trim()
    ]),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim()
];



exports.isRequestValidated = (req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next();
}