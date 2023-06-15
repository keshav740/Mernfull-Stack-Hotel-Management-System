const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    Room_Number: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },
    Room_Type: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    
    Price: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Avilable_Not: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
});

module.exports = mongoose.model("Room",RoomSchema);