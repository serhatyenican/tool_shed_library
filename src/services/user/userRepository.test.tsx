import { UserRepository } from "./userRepository";

const mockUser = {
    id: "098765432109876543214321",
    userName: "Pedrito",
    email: "pedrito@com",
    passwd: "Ilovedaddy",
    favorites: [],
    userProducts: [""],
};

let service: UserRepository;
let error: Error;
beforeEach(() => {
    service = new UserRepository();
    error = new Error("Error");
});

describe("When login is called,", () => {
    test("Then it should return a token", async () => {
        const mockToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGUwMzc5ZTViOTRlNDcxYmE1MzM0NiIsInVzZXJOYW1lIjoiSXJlbnVza2EiLCJlbWFpbCI6ImlyZW51c2thQGNvbSIsImlhdCI6MTY3MDQyMzE3N30.KZlpynbm7FeJF9cj3-bQSKjJp4VZrESMrIXWGjM8EuI";
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({ token: mockToken }),
        });
        const result = await service.login({ userName: mockUser.userName });
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual({ token: mockToken });
    });
    test("Then it should throw an error if incorrect login", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: "error",
        });
        await service.login(mockUser);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
});

describe("When addToFavorites is called", () => {
    test("Then it should update the favorites property in user", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockUser),
        });
        const result = await service.addToFavorites(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual(mockUser);
    });
    test("Then it should throw an error if there is incorrect information", async () => {
        global.fetch = jest.fn().mockRejectedValue({
            ok: false,
            status: 404,
            statusText: "error",
        });
        await service.addToFavorites(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
    });
});

describe("When removeFavorites is called", () => {
    test("Then it should update the favorites property in user", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockUser),
        });
        const result = await service.removeFavorites(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(result).toEqual(mockUser);
    });
    test("Then it should throw an error if there is incorrect information", async () => {
        global.fetch = jest.fn().mockRejectedValue({
            ok: false,
            status: 404,
            statusText: "error",
        });
        await service.removeFavorites(mockUser.id);
        expect(fetch).toHaveBeenCalled();
        expect(error).toBeInstanceOf(Error);
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
});
