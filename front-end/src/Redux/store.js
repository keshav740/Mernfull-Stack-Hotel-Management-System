import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import GuestSlice from "./Slice/GuestSlice";
import BookingSlice from "./Slice/BookingSlice";
import AddItemSlice from "./Slice/AddItemSlice";
// import AddItemSlice from "./Slice/AddItemSlice";




const store = configureStore({

    
    reducer: {
        employees: EmployeeSlice,
        services: ServicesSlice,
        guests:GuestSlice
        books:BookingSlice,
        rooms:RoomSlice,
        guests:GuestSlice,
        Items:AddItemSlice
        // Aitems:AddItemSlice



    },
});

export default store;
