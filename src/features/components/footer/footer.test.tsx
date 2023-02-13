import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../services/store/store";


describe("Given Footer component", () => {
    beforeEach(() => {
        render(
            <Provider store={appStore}>
                <Router>
                    <Footer />
                </Router>
            </Provider>
        );
    });
    test("Then it should display shed", () => {
        const element = screen.findByText(/shed/i);
        expect(element).toBeTruthy();
    });
});
