import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../services/store/store";
import { MemoryRouter as Router } from "react-router-dom";
import { DrawerMenu } from "./drawer";
import { mockStore } from "../../../infrastructure/mock/mockStore";

describe("Given appRoutes component", () => {
    describe("When we render the component, and the route is garden", () => {
        test("It should display the garden category", () => {
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
                        initialIndex={2}
                    >
                        <DrawerMenu />
                    </Router>
                </Provider>
            );
            const element = screen.findByText(/garden/i);
            expect(element).toBeTruthy();
        });
    });
    describe("When user is logged in", () => {
        test("Then it must display the added options for logged users", () => {
            render(
                <Provider store={mockStore}>
                    <Router
                        initialEntries={[
                            "/",
                            "/electrical",
                            "/garden",
                            "/wood",
                            "/General",
                            "/howDoesItWork",
                            "/detail",
                            "/ProductsFav",
                            "/ToolsInUse",
                            "/Logout",
                            "/delete",
                        ]}
                        initialIndex={6}
                    >
                        <DrawerMenu />
                    </Router>
                </Provider>
            );
            const element = screen.findByText(/Favorites/i);
            expect(element).toBeTruthy();
        });
    });
});
