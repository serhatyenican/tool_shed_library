import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./homePage";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { mockStore } from "../../../infrastructure/mock/mockStore";

describe("Given HomePage component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <HomePage />
                </Provider>
            </Router>
        );
    });
    test("Then it should display projects", () => {
        const element = screen.findByText(/projects/i);
        expect(element).toBeTruthy();
    });
});
