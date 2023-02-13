import { render, screen } from "@testing-library/react";

import App from "./App";
import { Provider } from "react-redux";

import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "./services/store/store";

describe("Given Footer component", () => {
    beforeEach(() => {
        render(
            <Provider store={appStore}>
                <Router>
                    <App />
                </Router>
            </Provider>
        );
    });
    test("Then it should display shed", () => {
        const element = screen.findAllByText(/Shed/i);
        expect(element).toBeTruthy();
    });
});
