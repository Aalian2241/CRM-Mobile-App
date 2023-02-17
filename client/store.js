import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/slice";

export const store = configureStore({
    reducer:{
        crm: navReducer,
    },
});