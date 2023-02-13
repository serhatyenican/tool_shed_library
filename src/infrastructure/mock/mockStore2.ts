import { configureStore } from "@reduxjs/toolkit";
import { ProductI } from "../../models/product";
import { productsReducer } from "../../services/product/productsReducer";
import { rootState } from "../../services/store/store";
import { userReducer } from "../../services/user/userReducer";


export const productMock = {
    name: "powerChainSaw",
    category: "wood",
    images: [""],
    id: "3",
    owner: null,
    description: "",
    isAvailable: true,
};

export const userMock = {
    userName: "david",
    passwd: "321",
    id: "2",
    email: "@gmail",
    favorites: [productMock],
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
            name: "superdupertool",
            category: "wood",
            images: [""],
            id: "4",
            owner: userMock,
            description: "",
            isAvailable: true,
        },
        {
            name: "superestereo",
            category: "electrical",
            images: [""],
            id: "6",
            owner: null,
            description: "",
            isAvailable: true,
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
export const mockStore2 = configureStore({
    reducer: {
        users: userReducer,
        products: productsReducer,
    },
    preloadedState,
});
