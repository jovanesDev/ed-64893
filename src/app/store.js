import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counterSlice";
import productosSlice from "../feature/productosSlice";
import uiSlice from "../feature/uiSlice";
import cartSlice from "../feature/cartSlice";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        productos:productosSlice,
        ui:uiSlice,
        carrito:cartSlice
    }
})