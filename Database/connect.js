const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect("mongodb://localhost:27017/EventManagement")
}

module.exports=connectDb 