import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";
import BookingSlice from "./Slice/BookingSlice";
// import CreateSlice from "./Slice/CreateSlice";






const store = configureStore({
    reducer: {


        rooms: RoomSlice,
        employees: EmployeeSlice,
        services: ServicesSlice,
        books:BookingSlice
        // rooms: CreateSlice




    },
});

export default store;
