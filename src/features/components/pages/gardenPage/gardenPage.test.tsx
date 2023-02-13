import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import { appStore } from "../../../../services/store/store";

import Garden from "./gardenPage";

describe("Given Garden component", () => {
    test("Then it should display garden", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <Garden></Garden>
                </Provider>
            </Router>
        );
        const element = screen.findByText(/garden/i);
        expect(element).toBeTruthy();
    });
    test("Then it should display loading if no product", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <Garden></Garden>
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
});
