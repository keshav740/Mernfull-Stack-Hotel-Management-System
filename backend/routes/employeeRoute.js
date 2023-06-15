const express = require("express");
const { getAllEmployee, createEmployee  , updateEmployee, deleteEmployee} = require("../controllers/employeeController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/employees").get(getAllEmployee);
router.route("/employee/new").post(createEmployee);
router.route("/employee/:id").put(updateEmployee).delete(deleteEmployee);


module.exports= router