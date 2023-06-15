const app = require("./app");

const dotenv= require("dotenv");
const connectDatabase= require("./config/database")


// confiig
dotenv.config({path:"config/config.env"})

// connect to database 
connectDatabase();  


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});