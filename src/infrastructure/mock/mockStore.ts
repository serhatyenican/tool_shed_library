import { configureStore } from "@reduxjs/toolkit";
import { ProductI } from "../../models/product";
import { productsReducer } from "../../services/product/productsReducer";
import { rootState } from "../../services/store/store";
import { userReducer } from "../../services/user/userReducer";



export const userMock = {
    userName: "david",
    passwd: "321",
    id: "2",
    email: "@gmail",
    favorites: [],
    userProducts: [],
};
export const preloadedState: Partial<rootState> = {
    users: {
        user: userMock,
        token: "token",
        isLogged: true,
        isLogging: false,
    },
    products: [
        {
            name: "powerdrill",
            category: "garden",
            images: [""],
            id: "4",
            owner: null,
            description: "",
            isAvailable: true,
        },
        {
            name: "radio",
            category: "electrical_paint",
            images: [""],
            id: "6",
            owner: null,
            description: "",
            isAvailable: true,
        },
        {
            name: "mop",
            category: "general",
            images: [""],
            id: "9",
            owner: null,
            description: "mop your life away",
            isAvailable: false,
        },
        {
            name: "powerChainSaw",
            category: "wood",
            images: [""],
            id: "3",
            owner: null,
            description: "",
            isAvailable: true,
        } as ProductI,
    ],
};
export const mockStore = configureStore({
    reducer: {
        users: userReducer,
        products: productsReducer,
    },
    preloadedState,
});
