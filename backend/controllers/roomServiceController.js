const Service = require("../models/rooomServicModel");



// create student --Admin
exports.createService = (async (req, res, next) => {
    const service = await Service.create(req.body);

    res.status(201).json({
        success: true,
        service
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


exports.getAllServices = async (req, res) => {
    const ser = await Service.find();
    res.status(200).json({
        success: true,
        ser
    });

}

exports.updateService = async (req, res, next) => {
    let ser1 = await Service.findById(req.params.id);

    if (!ser1) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Room not Found"
        });
    }
    ser1 = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        ser1,
    });

}


exports.deleteService = async (req, res, next) => {

    // req.body.student=req.student.id
    const service = await Service.findById(req.params.id);
  
    if (!service) {
      return next(new ErrorHandler("Service not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Service.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Service delete successfully",
    });
  } ;
