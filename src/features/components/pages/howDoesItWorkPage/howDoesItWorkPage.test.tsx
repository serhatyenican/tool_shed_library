import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HowDoesItWork from "./howDoesItWorkPage";


describe("Given howdoesitwork component", () => {
    beforeEach(() => {
        render(<HowDoesItWork />);
    });
    test("Then it should display works", () => {
        const element = screen.getByText(/works/i);
        expect(element).toBeInTheDocument();
    });
});
