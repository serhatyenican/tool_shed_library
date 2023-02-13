import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { ProductI } from "../../../models/product";

import { appStore } from "../../store/store";
import { ProductRepository } from "../productRepository";
import { useProducts } from "./useProducts";

jest.mock("../productRepository");

const mockProduct: ProductI = {
    id: "4",
    name: "chainsaw",
    category: "wood",
    description: "",
    images: ["", ""],
    isAvailable: true,
    owner: null,
};

const newMockProduct: ProductI = {
    id: "4",
    name: "chainsaw",
    category: "wood",
    description: "",
    images: ["", ""],
    isAvailable: true,
    owner: null,
};
describe("Given hooks", () => {
    let result: {
        current: {
            products: Array<ProductI>;
            handleUpdate: (updateProduct: ProductI) => void;
            handleSelect: (productId: string) => void;
            handleLoad: (productI: ProductI) => void;
        };
    };
    beforeEach(() => {
        console.log = jest.fn();
        ProductRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockProduct]);
        ProductRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(newMockProduct);
        ProductRepository.prototype.get = jest
            .fn()
            .mockResolvedValue(mockProduct.id);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useProducts(), { wrapper }));
    });
    test("It should first return mockProduct", async () => {
        await waitFor(() => {
            expect(result.current.products).toEqual([mockProduct]);
        });
    });
    test("it should update the product once handleupdate has been called", async () => {
        await waitFor(() => {
            result.current.handleUpdate(newMockProduct);
            expect(result.current.products.at(-1)).toEqual(newMockProduct);
        });
        await waitFor(() => {
            expect(ProductRepository.prototype.update).toHaveBeenCalled();
        });
    });

    test("Then update should throw an error if given incorrect information", async () => {
        ProductRepository.prototype.update = jest
            .fn()
            .mockRejectedValue(new Error("anErrorMessage"));

        await waitFor(() => {
            result.current.handleUpdate(mockProduct);
            expect(console.log).toHaveBeenCalled;
        });
    });

    test("it should select the product once handleselect has been called", async () => {
        await waitFor(() => {
            result.current.handleSelect(mockProduct.id);
            expect(result.current.products.at(-1)).toEqual(mockProduct);
        });
        await waitFor(() => {
            expect(ProductRepository.prototype.get).toHaveBeenCalled();
        });
    });

    test("Then select should throw an error if given incorrect information", async () => {
        const error = new Error("");
        ProductRepository.prototype.get = jest
            .fn()
            .mockRejectedValue(mockProduct);

        await waitFor(() => {
            result.current.handleSelect(mockProduct.id);
            expect(error).toBeInstanceOf(Error);
        });
    });

    test("Then load should throw an error if given incorrect information", async () => {
        const error = new Error("");
        ProductRepository.prototype.getAll = jest
            .fn()
            .mockRejectedValue(mockProduct);

        await waitFor(() => {
            result.current.handleLoad(mockProduct);
            expect(error).toBeInstanceOf(Error);
        });
    });
});
