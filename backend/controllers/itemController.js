const Item = require("../models/itemModel");



// create student --Admin
exports.createItem = (async (req, res, next) => {
    const student = await Item.create(req.body);

    res.status(201).json({
        success: true,
        student,
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


exports.getAllitems = async (req, res) => {
    const items = await Item.find();
    res.status(200).json({
        success: true,
        items,
    });

}

exports.updateitem = async (req, res, next) => {
    let item = await Item.findById(req.params.id);

    if (!item) {
        // return next(new ErrorHandler("Item not found ", 404));
        return res.status(500).json({
            success: false,
            message: "Itme not Found"
        });
    }
    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        item,
    });

}


exports.deleteItem = async (req, res, next) => {

    // req.body.student=req.student.id
    const item = await Item.findById(req.params.id);
  
    if (!item) {
      return next(new ErrorHandler("Item not found ", 404));
    }
  
    // ==========================================================================
  
    // another trick to delete one record
  
    // await student.deleteOne(req.params.id);
  
    //   ===========================================================================
  
    await Item.findOneAndDelete();
  
    res.status(200).json({
      success: true,
      message: "Item delete successfully",
    });
  } ;