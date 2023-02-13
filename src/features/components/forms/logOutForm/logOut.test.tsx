import { fireEvent, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../services/store/store";


import Logout from "./logOut";

describe("Given the logout component", () => {
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <Logout />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Logout/i));
        userEvent.click(await screen.findByText(/Logout/i));
    });
});
