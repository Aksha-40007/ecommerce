const mongoose = require("mongoose");

const db= mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected to db")
}).catch(()=>{
    console.log("error while connecting to mongodb");
});

module.exports = db;