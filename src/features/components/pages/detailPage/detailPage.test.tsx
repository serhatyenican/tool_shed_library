import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import DetailPage from "./detailPage";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import { appStore } from "../../../../services/store/store";

describe("Given Detail Page component", () => {
    test("it should render detail product when called", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <DetailPage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/radio/i);
        expect(element).toBeTruthy();
    });
    test("it should render loading if there are no products when called", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <DetailPage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
});
