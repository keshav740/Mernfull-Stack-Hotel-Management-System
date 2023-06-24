import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import GuestSlice from "./Slice/GuestSlice";




const store = configureStore({

    
    reducer: {


        rooms: RoomSlice,
        employee: EmployeeSlice,
        services: ServicesSlice,
        guests:GuestSlice



    },
});

export default store;
