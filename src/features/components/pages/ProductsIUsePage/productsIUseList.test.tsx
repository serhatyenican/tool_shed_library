import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { mockStore } from "../../../../infrastructure/mock/mockStore";
import ProductsIUse from "./productsIUseList";
import { appStore } from "../../../../infrastructure/services/store/store";
import { mockStore2 } from "../../../../infrastructure/mock/mockStore2";

describe("Given ProductsIUseList component", () => {
    test("it should render product name when called", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <ProductsIUse />
                </Provider>
            </Router>
        );
        const element = screen.findAllByText(/tools/i);
        expect(element).toBeTruthy();
    });
    test("it should render loading when called, but no products", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <ProductsIUse />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
    test("it should render product when called, but no products", () => {
        render(
            <Router>
                <Provider store={mockStore2}>
                    <ProductsIUse />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/powerdrill/i);
        expect(element).toBeTruthy();
    });
});
