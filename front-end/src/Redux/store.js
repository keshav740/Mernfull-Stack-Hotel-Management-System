import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";





const store = configureStore({
    reducer:{
  
        
    rooms:RoomSlice,
    employee:EmployeeSlice
    

    
    },
});

export default store;
