import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WoodPage from "./woodPage";
import { Provider } from "react-redux";
import { MemoryRouter  as Router} from "react-router-dom";
import { mockStore } from "../../../../infrastructure/mock/mockStore";


describe("Given WoodPage component", () => {
    test("Then it should display shed", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <WoodPage />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/powerdrill/i);
        expect(element).toBeTruthy();
    });
    
});
