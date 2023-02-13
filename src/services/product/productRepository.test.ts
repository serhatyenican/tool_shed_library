import "@testing-library/jest-dom";
import { ProductRepository } from "./productRepository";

const mockProduct = {
    id: "3",
    name: "Axe",
    category: "garden",
    images: ["", ""],
    isAvailable: true,
    owner: null,
    description: "",
};
let service: ProductRepository;
let error: Error;

describe("Given product api service", () => {
    describe("When we instantiate it", () => {
        beforeEach(() => {
            service = new ProductRepository();
            error = new Error("error");
        });
        test("Then if I use service.error(), it should return an error", () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });
        test("Then it should throw an error if there is incorrect information", async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "error",
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
        test("Then if the user can not register, it should throw an ERROR", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: "error",
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });

        test("Then if I use service.getProduct(), it should return the promise of an array of products", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            await service.get(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
        });

        test("then if I use service.getProduct() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.get(mockProduct.name);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if I use service.getAll(), it should return the promise of an array of products", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test("then if I use getAll() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAll();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
        test("Then if I use update product service, it should return a promise of a product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockProduct]),
            });
            const result = await service.update(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockProduct]);
        });
        test("Then if I use update() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.update(mockProduct);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });

        test("Then if I use request product service, it should return a promise of a product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockProduct]),
            });
            const result = await service.requestProduct("3");
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockProduct]);
        });

        test("Then if I use request product and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            await service.requestProduct(mockProduct.id);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(fetch).toHaveBeenCalled();
        });

        test("Then if I use finish with product service, it should return a promise of a product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockProduct]),
            });
            const result = await service.finishWithProduct("3");
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockProduct]);
        });

        test("Then if I use finish with product service with incorrect information, it should return an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            await service.finishWithProduct(mockProduct.id);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(fetch).toHaveBeenCalled();
        });
    });
    describe("When we instantiate query,", () => {
        test("Then it should return a token", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.query("Axe");
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockProduct);
        });
        test("Then if the user can not login, it should throw an ERROR", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: "error",
            });
            await service.query("");
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
});
