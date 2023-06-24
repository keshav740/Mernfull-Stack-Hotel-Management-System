import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import GuestSlice from "./Slice/GuestSlice";
import BookingSlice from "./Slice/BookingSlice";




const store = configureStore({

    
    reducer: {
        employees: EmployeeSlice,
        services: ServicesSlice,
        books:BookingSlice,
        rooms:RoomSlice,
        guests:GuestSlice



    },
});

export default store;
