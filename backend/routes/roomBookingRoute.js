const express = require("express");
const { getAllBooking, createBooking ,deleteBooking, updateBooking} = require("../controllers/roomBookingController");


const router=express.Router();
 
//making routes
// for all students record
router.route("/room-bookings").get(getAllBooking);
router.route("/room-booking/new").post(createBooking);
router.route("/room-booking/:id").put(updateBooking).delete(deleteBooking);


module.exports= router