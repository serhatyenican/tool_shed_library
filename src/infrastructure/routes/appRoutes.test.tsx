import { render, screen } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./appRoutes";
import { Provider } from "react-redux";
import { appStore } from "../../services/store/store";


describe("Given appRoutes component", () => {
    describe("When we render the component and the route is wood", () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router
                        initialEntries={[
                            "/",
                            "/wood",
                            "/electrical",
                            "/garden",
                            "/HowDoesItWork",
                            "/detail",
                            "/Register",
                            "/Login",
                        ]}
                        initialIndex={1}
                    >
                        <AppRoutes />
                    </Router>
                </Provider>
            );
        });
        test("Then it should display wood", () => {
            const element = screen.findByText(/wood/i);
            expect(element).toBeTruthy;
        });
    });
});
