const mongoose = require("mongoose");

const roomServiceSchema = new mongoose.Schema({
    Service_Name: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },
    Servive_Charge: {
        type: Number,
        required: [true, "Please enter your Item Price"],
    },


});

module.exports = mongoose.model("Service",roomServiceSchema);