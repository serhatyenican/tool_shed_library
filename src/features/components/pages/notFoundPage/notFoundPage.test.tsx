import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import NotFoundPage from "./notFoundPage";

describe("Given NotFound Page component", () => {
    beforeEach(() => {
        render(<NotFoundPage />);
    });
    test("Then it should display works", () => {
        const element = screen.getByText(/wow/i);
        expect(element).toBeInTheDocument();
    });
});
