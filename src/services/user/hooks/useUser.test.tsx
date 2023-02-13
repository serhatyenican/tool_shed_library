import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";


import { ProductRepository } from "../../product/productRepository";

import { appStore } from "../../store/store";
import { UserRepository } from "../userRepository";

import { useUsers } from "./useUser";
import { ProductWithUser } from "../repository";
import { ProductI } from "../../../models/product";
import { UserI } from "../../../models/user";

jest.mock("../userRepository");

jest.mock("../../product/productRepository");

const mockProduct: ProductI = {
    id: "3",
    name: "asdaadffa",
    category: "wood",
    description: "",
    images: ["", ""],
    isAvailable: true,
    owner: null,
};
const mockUser: UserI = {
    id: "456709876543211234567890",
    userName: "pedrete",
    email: "pedrete@com",
    passwd: "ILoveSaturdays",
    favorites: [mockProduct],
    userProducts: ["21"],
};
const mockProductWithUser: ProductWithUser = {
    product: mockProduct,
    user: mockUser,
};

let result: {
    current: {
        users: {
            user: UserI | null;
            token: string | null;
            isLogged: boolean;
            isLogging: boolean;
        };
        handleLogin: (user: UserI) => void;
        handleAddToFavorites: (id: string) => void;
        handleRequestProduct: (id: string) => void;
        handleRemoveFavorites: (id: string) => void;
        handleFinishWithProduct: (id: string) => void;
    };
};
describe.only("Given the user Hook, ", () => {
    function userRepositoryHappyPaths() {
        UserRepository.prototype.login = jest.fn().mockResolvedValue(mockUser);

        UserRepository.prototype.addToFavorites = jest
            .fn()
            .mockResolvedValue(mockUser.id);
        UserRepository.prototype.removeFavorites = jest
            .fn()
            .mockResolvedValue(mockUser.id);

        ProductRepository.prototype.requestProduct = jest
            .fn()
            .mockResolvedValue(mockProductWithUser);
        ProductRepository.prototype.finishWithProduct = jest
            .fn()
            .mockResolvedValue(mockProductWithUser);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    }

    function userRepositoryFailTests() {
        console.log = jest.fn();

        UserRepository.prototype.login = jest
            .fn()
            .mockRejectedValue(new Error());

        UserRepository.prototype.addToFavorites = jest
            .fn()
            .mockRejectedValue(new Error("anErrorMessage"));
        UserRepository.prototype.removeFavorites = jest
            .fn()
            .mockRejectedValue(new Error("anError"));
        ProductRepository.prototype.requestProduct = jest
            .fn()
            .mockRejectedValue(new Error("anError"));
        ProductRepository.prototype.finishWithProduct = jest
            .fn()
            .mockRejectedValue(new Error("anError"));

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useUsers(), { wrapper }));
    }

    describe("When handleLogin is called", () => {
        test("Then it should return mockUser", async () => {
            userRepositoryHappyPaths();
            await waitFor(() => {
                result.current.handleLogin(mockUser);
                expect(result.current.users.isLogged).toEqual(true);
            });
            await waitFor(() => {
                expect(UserRepository.prototype.login).toHaveBeenCalled();
            });
        });
        test("Then it should catch an error", async () => {
            userRepositoryFailTests();
            result.current.handleLogin(mockUser);
            expect(console.log).toHaveBeenCalled;
        });
    });

    describe("When handleAddToFavorites is called", () => {
        test("Then it should return mockUser", async () => {
            userRepositoryHappyPaths();
            await waitFor(() => {
                result.current.handleAddToFavorites(mockUser.id);
                expect(result.current.users.isLogged).toEqual(true);
            });
            await waitFor(() => {
                expect(
                    UserRepository.prototype.addToFavorites
                ).toHaveBeenCalled();
            });
        });
        test("Then it should catch an error", async () => {
            userRepositoryFailTests();
            result.current.handleAddToFavorites(mockUser.id);
            expect(console.log).toHaveBeenCalled;
        });
    });

    describe("When handleRemoveFavorites is called", () => {
        test("Then it should return mockUser", async () => {
            userRepositoryHappyPaths();
            await waitFor(() => {
                result.current.handleRemoveFavorites(mockUser.id);
                expect(result.current.users.isLogged).toEqual(true);
            });
            await waitFor(() => {
                expect(
                    UserRepository.prototype.removeFavorites
                ).toHaveBeenCalled();
            });
        });
        test("Then it should catch an error", async () => {
            userRepositoryFailTests();
            result.current.handleRemoveFavorites(mockUser.id);
            expect(console.log).toHaveBeenCalled;
        });
    });

    describe("When Request Product is called", () => {
        test("Then it should return mockProductwithUser ", async () => {
            userRepositoryHappyPaths();
            await waitFor(() => {
                result.current.handleRequestProduct(mockProduct.id);
                expect(
                    ProductRepository.prototype.requestProduct
                ).toHaveBeenCalled();
            });
        });
        test("Then it should catch an error", async () => {
            userRepositoryFailTests();
            result.current.handleRequestProduct(mockProduct.id);
            expect(console.log).toHaveBeenCalled;
        });
    });
    describe("When Finish with Product is called", () => {
        test("Then it should return mockProductwithUser ", async () => {
            userRepositoryHappyPaths();
            await waitFor(() => {
                result.current.handleFinishWithProduct(mockProduct.id);
                expect(
                    ProductRepository.prototype.finishWithProduct
                ).toHaveBeenCalled();
            });
        });
        test("Then it should catch an error", async () => {
            userRepositoryFailTests();
            result.current.handleFinishWithProduct(mockProduct.id);
            expect(console.log).toHaveBeenCalled;
        });
    });
});
