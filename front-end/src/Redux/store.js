import { configureStore } from "@reduxjs/toolkit";
import ServicesSlice from "./Slice/ServicesSlice";




const store = configureStore({
    reducer:{
  
        services: ServicesSlice,
    

    
    },
});

export default store;
