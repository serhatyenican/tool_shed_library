import { createAction } from "@reduxjs/toolkit";
import { ProductI } from "../../models/product";
import { productActionTypes } from "../user/actionTypes";

export const loadActionCreator = createAction<Array<ProductI>>(
    productActionTypes.load
);

export const addActionCreator = createAction<ProductI>(productActionTypes.add);

export const updateActionCreator = createAction<ProductI>(
    productActionTypes.update
);
export const selectActionCreator = createAction<ProductI>(
    productActionTypes.select
);
