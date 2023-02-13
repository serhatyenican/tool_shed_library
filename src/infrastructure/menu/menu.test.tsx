import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { Menu } from "./menu";
import { Provider } from "react-redux";
import { mockStore } from "../mock/mockStore";
import { appStore } from "../../services/store/store";

describe("Given appRoutes component", () => {
    describe("When we render the component and the route is wood", () => {
        test("Then it should display wood", () => {
            render(
                <Provider store={appStore}>
                    <Router
                        initialEntries={[
                            "/",
                            "/electrical",
                            "/garden",
                            "/wood",
                            "/how does it work",
                            "/detail",
                            "/Register",
                            "/Login",
                            "/General",
                            "ProductsFav",
                        ]}
                        initialIndex={3}
                    >
                        <Menu />
                    </Router>
                </Provider>
            );
            const element = screen.getAllByRole("link");
            expect(element).toHaveLength(8);
        });
        test("Then it should display wood", () => {
            render(
                <Provider store={mockStore}>
                    <Router
                        initialEntries={[
                            "/",
                            "/electrical",
                            "/garden",
                            "/wood",
                            "/how does it work",
                            "/detail",
                            "/Register",
                            "/Login",
                            "/General",
                            "ProductsFav",
                        ]}
                        initialIndex={3}
                    >
                        <Menu />
                    </Router>
                </Provider>
            );
            const element = screen.getAllByRole("link");
            expect(element).toHaveLength(10);
        });
    });
});
