import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";




const store = configureStore({
    reducer:{
  
        Rooms:RoomSlice

    
    },
});

export default store;
