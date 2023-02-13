import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import GeneralPurposePage from "./generalPurposePage";
import { appStore } from "../../../../services/store/store";

describe("Given General Purpose component", () => {
    test("Then it should display projects", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <GeneralPurposePage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/projects/i);
        expect(element).toBeTruthy();
    });
    test("Then it should display loading if there are no products", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <GeneralPurposePage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
});
