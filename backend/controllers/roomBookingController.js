const Booking = require("../models/roomBookingModel");



// create student --Admin
exports.createBooking = (async (req, res, next) => {
    const booking = await Booking.create(req.body);

    res.status(201).json({
        success: true,
        booking
    });
});

// get all students

// exports.getAllitems = catchAsyncErrors( async (req, res) => {
//     to seacrhing 

//     const apiFeature= new ApiFeatures(Student.find(),req.query).search().filter();

//   // ======================================================
//     const allstudents = await Student.find();
//       const allstudents = await apiFeature.query;

//     res.status(200).json({
//       success: true,
//       allstudents,
//     });
//   });


exports.getAllBooking = async (req, res) => {
    const book = await Booking.find();
    res.status(200).json({
        success: true,
        book
    });

}

exports.updateBooking = async (req, res, next) => {
    let book1 = await Booking.findById(req.params.id);

    if (!book1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    book1 = await Booking.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        book1,
    });

}

exports.deleteBooking = async (req, res, next) => {

    // req.body.student=req.student.id
    const booking = await Booking.findById(req.params.id);
  
    if (!booking) {
      return next(new ErrorHandler("Booking not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Booking.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Booking delete successfully",
    });
  } ;
