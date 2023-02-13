import { createAction } from "@reduxjs/toolkit";
import { UserI } from "../../models/user";
import { userActionTypes } from "./actionTypes";
import { UserWithToken } from "./repository";

export const userStartLoginActionCreator = createAction<void>(
    userActionTypes.startLogin
);

export const userloginActionCreator = createAction<UserWithToken>(
    userActionTypes.login
);

export const userlogoutActionCreator = createAction<void>(
    userActionTypes.logout
);

export const useraddtoFavoritesActionCreator = createAction<UserI>(
    userActionTypes.addFavorites
);

export const userrequestProductActionCreator = createAction<UserI>(
    userActionTypes.requestProduct
);

export const userRemoveFavoritesActionCreator = createAction<UserI>(
    userActionTypes.removeFavorites
);
