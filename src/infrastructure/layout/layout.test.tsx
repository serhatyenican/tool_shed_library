import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../services/store/store";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test('Then it should display "Testing layout"', () => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Layout>
                            <p>Testing layout</p>
                        </Layout>
                    </Router>
                </Provider>
            );
            const element = screen.getByText(/Testing layout/i);
            expect(element).toBeInTheDocument();
        });
    });
});
