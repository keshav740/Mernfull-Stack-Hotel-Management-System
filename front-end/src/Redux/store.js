import { configureStore } from "@reduxjs/toolkit";
import sallerySlice from "./slice/sallerySlice";



const store = configureStore({
    reducer:{
  
    sallerys:sallerySlice

    
    },
});

export default store;
