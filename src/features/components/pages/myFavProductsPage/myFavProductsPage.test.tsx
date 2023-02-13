import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import MyFavProductsPage from "./myFavProductsPage";

describe("Given Fav Products Page component", () => {
    describe("When we render the component", () => {
        test("Then it will display tools", () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <MyFavProductsPage />
                    </Provider>
                </Router>
            );
            const element = screen.findByText(/favorite/i);
            expect(element).toBeTruthy();
        });
    });
});
