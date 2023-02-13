import { useCallback, useEffect, useMemo } from "react";

import { rootState } from "../../store/store";
import { ProductRepository } from "../productRepository";
import * as ac from "../productActionCreators";

import { useDispatch, useSelector } from "react-redux";
import { ProductI } from "../../../models/product";

export const useProducts = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiProduct
                .getAll()
                .then((products) => dispatcher(ac.loadActionCreator(products)))
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiProduct, dispatcher]
    );

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const handleUpdate = (updateProduct: Partial<ProductI>) => {
        apiProduct
            .update(updateProduct)
            .then((product: ProductI) =>
                dispatcher(ac.updateActionCreator(product))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleSelect = useCallback(
        (productId: string) =>
            apiProduct
                .get(productId)
                .then((product) => dispatcher(ac.selectActionCreator(product)))
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiProduct, dispatcher]
    );

    return {
        products,
        handleUpdate,
        handleLoad,
        handleSelect,
    };
};
