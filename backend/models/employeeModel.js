const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    Employee_Name: {
        type: String,
        required: [true, "Please enter your Item Number"],
    },
    Phone_Number: {
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
    Gender: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Dob: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Role: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },
    Salary: {
        type: String,
        required: [true, "Please enter your Item Number"],
        },


});

module.exports = mongoose.model("Employee",EmployeeSchema);