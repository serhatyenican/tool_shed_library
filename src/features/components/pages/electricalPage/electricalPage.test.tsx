import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import ElectricalPage from "./electricalPage";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/services/store/store";

describe("Given Electrical Page component", () => {
    test("Then it should display radio", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <ElectricalPage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/electrical/i);
        expect(element).toBeTruthy();
    });
    test("Then it should display loading if no products", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <ElectricalPage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
});
