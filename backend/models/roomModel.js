const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    Room_Number: {
        type: String,
        required: [true, "Please enter your Room Number"],
    },
    Room_Type: {
        type: String,
        required: [true, "Please enter your Room Type"],
        // enum: ['Luxury', 'Delux', 'Normal', 'Super Delux']
        },

    Price: {
        type: String,
        // required: [true, "Please enter your Item Number"],
    },
    Avilable_Not: {
        type: String,
        required: [true, "Room Avialable or Not "],
        enum:['Yes','No']
        },
});

module.exports = mongoose.model("Room", RoomSchema);