

import { ProductI } from "../../models/product";
import { productActionTypes } from "../user/actionTypes";
import { loadActionCreator } from "./productActionCreators";
import { productsReducer } from "./productsReducer";

const mockProduct: ProductI = {
    id: "3",
    name: "powerwasher",
    category: "garden",
    description: "",
    images: ["", ""],
    isAvailable: true,
    owner: null,
};
let action: { type: string; payload: unknown };
let state: Array<ProductI>;

describe("Given a state and an action", () => {
    describe("When ActionTypes is to load a product", () => {
        test("Then it should return the payload as a new state", () => {
            const newState = productsReducer(
                [],
                loadActionCreator([mockProduct])
            );
            expect(newState).toEqual([mockProduct]);
        });
    });
    describe("When the action is not load", () => {
        test("Then it should return a new instance of state", () => {
            const newState = productsReducer([mockProduct], {
                type: "",
                payload: [],
            });
            expect(newState).toEqual([mockProduct]);
        });
    });

    describe("When the action is update", () => {
        beforeEach(() => {
            action = {
                type: productActionTypes.update,
                payload: { ...mockProduct, title: "Update product" },
            };
            state = [mockProduct];
        });
        test("Then the returned action should include the action payload", () => {
            const result = productsReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: productActionTypes.update,
                payload: { ...mockProduct, id: 1, title: "Update product" },
            };
            state = [mockProduct];
        });
        test("Then the returned state should not change the original state", () => {
            const result = productsReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [mockProduct];
        });
        test("Then the returned state should not change", () => {
            const result = productsReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
