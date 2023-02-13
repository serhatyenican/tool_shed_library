import { createReducer } from "@reduxjs/toolkit";
import { UserI } from "../../models/user";

import * as ac from "./userActionCreators";

const initialUserState: {
    isLogged: boolean;
    isLogging: boolean;
    user: UserI | null;
    token: string | null;
} = { isLogged: false, isLogging: false, user: null, token: null };

export const userReducer = createReducer(initialUserState, (builder) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    builder.addCase(ac.userStartLoginActionCreator, (state, _action) => ({
        ...state,
        isLogging: true,
        isLogged: false,
        user: null,
        token: null,
    }));
    builder.addCase(ac.userloginActionCreator, (state, action) => ({
        ...state,
        isLogging: false,
        isLogged: true,
        user: action.payload.user,
        token: action.payload.token,
    }));

    builder.addCase(
        ac.userlogoutActionCreator,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_state, _action) => initialUserState
    );

    builder.addCase(ac.useraddtoFavoritesActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));

    builder.addCase(ac.userrequestProductActionCreator, (state, action) => ({
        ...state,
        user: action.payload,
    }));

    builder.addCase(ac.userRemoveFavoritesActionCreator, (state, action) => {
        return {
            ...state,
            user: action.payload,
        };
    });

    builder.addDefaultCase((state) => state);
});
