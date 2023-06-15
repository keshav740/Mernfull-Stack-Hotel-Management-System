const express = require("express");
const { getAllGuest, createGuest  , updateGuest, deleteGuest} = require("../controllers/GuestController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/guests").get(getAllGuest);
router.route("/guest/new").post(createGuest);
router.route("/guest/:id").put(updateGuest).delete(deleteGuest);


module.exports= router