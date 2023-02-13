
import { UserI } from "../../models/user";
import { userActionTypes } from "./actionTypes";

import { userReducer } from "./userReducer";

describe("Given the userReducer", () => {
    const mockUser = {
        id: "123456789012345678901234",
        userName: "Manolito",
        email: "manolito@com",
        passwd: "IloveMomi",
        favorites: [],
        userProducts: [""],
    };

    let action: { type: string; payload: unknown };
    let state: {
        isLogged: boolean;
        isLogging: boolean;
        user: UserI | null;
        token: string | null;
    };

    describe("When the action is login", () => {
        test("Then the returned state should be the user the token from the action payload", () => {
            action = {
                type: userActionTypes.login,
                payload: {
                    isLogged: true,
                    isLogging: false,
                    token: "token",
                    user: mockUser,
                },
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });

    describe("When the action startLogin", () => {
        test("then the returned state should be isLogging true in the action payload", () => {
            action = {
                type: userActionTypes.startLogin,
                payload: {
                    isLogged: false,
                    isLogging: true,
                    user: null,
                    token: null,
                },
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action is logout", () => {
        test("Then the returned state should be the initial state", () => {
            action = {
                type: userActionTypes.logout,
                payload: {
                    isLogged: false,
                    isLogging: false,
                    user: null,
                    token: null,
                },
            };
            state = {
                ...state,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe("When the action is add to favorites", () => {
        test("Then the returned state should include the updated action payload", () => {
            action = {
                type: userActionTypes.addFavorites,
                payload: {
                    user: { ...mockUser, favorites: ["Update favorite"] },
                    isLogged: true,
                    isLogging: false,
                    token: null,
                },
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });

    describe("When the action is remove favorites", () => {
        test("Then the returned state should include the updated action payload", () => {
            action = {
                type: userActionTypes.removeFavorites,
                payload: {
                    ...mockUser,
                    favorites: ["Update favorite"],
                },
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);

            expect(result.user).toEqual({
                ...mockUser,
                favorites: ["Update favorite"],
            });
        });
    });

    describe("When the action is request Product", () => {
        test("Then the returned state should include the updated action payload", () => {
            action = {
                type: userActionTypes.requestProduct,
                payload: {
                    user: { ...mockUser, favorites: ["Product requested"] },
                    isLogging: false,
                    isLogged: true,
                    token: null,
                },
            };
            state = {
                ...state,
                user: mockUser,
            };
            const result = userReducer(state, action);
            expect(result).toEqual({ user: action.payload });
        });
    });
});
