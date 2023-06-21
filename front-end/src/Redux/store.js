import { configureStore } from "@reduxjs/toolkit";
import RoomSlice from "./Slice/RoomSlice";
import ServicesSlice from "./Slice/ServicesSlice";
import EmployeeSlice from "./Slice/EmployeeSlice";




const store = configureStore({
    reducer: {


        rooms: RoomSlice,
        employees: EmployeeSlice,
        services: ServicesSlice,
  

    },
});

export default store;
