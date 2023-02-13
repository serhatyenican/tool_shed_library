import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { mockStore } from "../../../../infrastructure/mock/mockStore";
import MyFavProductsList from "./myFavProductsList";
import { appStore } from "../../../../infrastructure/services/store/store";
import { mockStore2 } from "../../../../infrastructure/mock/mockStore2";

describe("Given myFavProductsList component", () => {
    test("it should render product name when called", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <MyFavProductsList />
                </Provider>
            </Router>
        );
        const element = screen.findAllByText(/tools/i);
        expect(element).toBeTruthy();
    });
    test("it should render loading when called, but no products", () => {
        render(
            <Router>
                <Provider store={mockStore2}>
                    <MyFavProductsList />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/powerChainSaw/i);
        expect(element).toBeTruthy();
    });
    test("it should render product name when called", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <MyFavProductsList />
                </Provider>
            </Router>
        );
        const element = screen.findByText(/loading/i);
        expect(element).toBeTruthy();
    });
});
