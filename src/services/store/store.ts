import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../user/userReducer";

import { productsReducer } from "../product/productsReducer";

export const appStore = configureStore({
    reducer: {
        products: productsReducer,
        users: userReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
