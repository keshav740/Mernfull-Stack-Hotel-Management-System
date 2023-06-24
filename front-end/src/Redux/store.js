import { configureStore } from "@reduxjs/toolkit";
import ServicesSlice from "./Slice/ServicesSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";
import BookingSlice from "./Slice/BookingSlice";
import RoomSlice from './Slice/RoomSlice'







const store = configureStore({
    reducer: {
        employees: EmployeeSlice,
        services: ServicesSlice,
        books:BookingSlice,
        rooms:RoomSlice
        

    },
});

export default store;
