import { createReducer } from "@reduxjs/toolkit";
import { ProductI } from "../../models/product";
import * as ac from "./productActionCreators";


const initialProductState: Array<ProductI> = [];

export const productsReducer = createReducer(initialProductState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);

    builder.addCase(ac.selectActionCreator, (_state, action) => [
        action.payload,
    ]);

    builder.addCase(ac.updateActionCreator, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );

    builder.addDefaultCase((state) => state);
});
