const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    try {
        if(req.header("Authorization")){
            const token = req.header("Authorization");
            const user = jwt.verify(token,process.env.JWT_SECRET);
            req.user = user.userId.userId;
        }
        else {
            return res.status(400).json({message:"Authorization required please login"});
        }
        next();
    } catch (err) {
            console.error('Error verifying token:', err);
            res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = verifyUser;
