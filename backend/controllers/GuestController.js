const Guest = require("../models/guestModel");



// create student --Admin
exports.createGuest = (async (req, res, next) => {
    const guest = await Guest.create(req.body);

    res.status(201).json({
        success: true,
        guest
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


exports.getAllGuest = async (req, res) => {
    const gue = await Guest.find();
    res.status(200).json({
        success: true,
        gue
    });

}

exports.updateGuest = async (req, res, next) => {
    let gue1 = await Guest.findById(req.params.id);

    if (!gue1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    gue1 = await Guest.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        gue1,
    });

}

exports.deleteGuest = async (req, res, next) => {

    // req.body.student=req.student.id
    const guest = await Guest.findById(req.params.id);
  
    if (!guest) {
      return next(new ErrorHandler("Guest not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Guest.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Guest delete successfully",
    });
  } ;