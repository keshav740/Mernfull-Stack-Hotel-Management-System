import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";

// import CreateSlice from "./Slice/CreateSlice";






const store = configureStore({
    reducer: {


        rooms: RoomSlice,
        employees: EmployeeSlice,
        services: ServicesSlice,
        // rooms: CreateSlice




    },
});

export default store;
