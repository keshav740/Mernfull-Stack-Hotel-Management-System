import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";

import ServicesSlice from "./Slice/ServicesSlice";




const store = configureStore({
    reducer: {


        rooms: RoomSlice,
        employee: EmployeeSlice
        services: ServicesSlice,



    },
});

export default store;
