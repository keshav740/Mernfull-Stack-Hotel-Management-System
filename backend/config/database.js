const mongoose = require("mongoose");

//custom url of database

//mongo://localhost:27017/School_management

// =========================================

const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,
        // useCreateIndex:true
    }).then((data)=>{
        console.log(`MongoDB connected with server ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports=connectDatabase;

