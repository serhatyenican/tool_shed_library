import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { mockStore } from "../../../../infrastructure/mock/mockStore";
import { appStore } from "../../../../services/store/store";

import { RequestProduct } from "./requestProduct";

describe("Given the request product component", () => {
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <RequestProduct id={"123"} isAvailable={true} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Request/i));
        userEvent.click(await screen.findByText(/Request/i));
    });
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <RequestProduct id={"123"} isAvailable={false} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Request/i));
        userEvent.click(await screen.findByText(/Sorry/i));
    });
});
