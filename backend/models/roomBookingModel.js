const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    Guest_Name: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },
    Guest_Number: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    
    Address: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Email: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Room_Number: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Booking_Date_Time: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Checkin_Date_Time: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Checkout_Date_Time: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Number_Of_Children: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Number_Of_Adults: {
            type: String,
            required: [true, "Please enter your Item Number"],
            },
    Special_Request: {
            type: String,
            required: [true, "Please enter your Item Number"],
            },


});

module.exports = mongoose.model("Booking",BookingSchema);