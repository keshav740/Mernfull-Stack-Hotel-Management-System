const Room = require("../models/roomModel");

// create student --Admin
exports.createRoom = (async (req, res, next) => {
    const room = await Room.create(req.body);

    res.status(201).json({
        success: true,
        room
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


exports.getAllRoom = async (req, res) => {
    const rom = await Room.find();
    res.status(200).json({
        success: true,
        rom
    });

}

exports.updateRoom = async (req, res, next) => {
    let room1 = await Room.findById(req.params.id);

    if (!room1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    room1 = await Room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        room1,
    });

}


exports.deleteRoom = async (req, res, next) => {

    // req.body.student=req.student.id
    const room = await Room.findById(req.params.id);
  
    if (!room) {
      return next(new ErrorHandler("Room not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Room.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Room delete successfully",
    });
  } ;
