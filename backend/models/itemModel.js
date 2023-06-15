const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    Item_Name: {
        type: String,
        required: [true, "Please enter your Item Name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter your Item Price"],
    },


});

module.exports = mongoose.model("Item",itemSchema);