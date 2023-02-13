import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../services/store/store";

import { AddToFavs } from "./addToFavsButton";

describe("Given the add to favs button component", () => {
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <AddToFavs id={"123"} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Add/i));
        userEvent.click(await screen.findByText(/Add/i));
    });
    test("it should launch a different action if user is logged", async () => {
        const mockUser = {
            islogged: true,
        };
        render(
            <Router>
                <Provider store={appStore}>
                    <AddToFavs id={mockUser as unknown as string} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Add/i));
        userEvent.click(await screen.findByText(/Add/i));
    });
    test("it should launch a different action if user is logged", async () => {
        const mockUser = {
            islogged: false,
        };
        render(
            <Router>
                <Provider store={appStore}>
                    <AddToFavs id={mockUser as unknown as string} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByText(/Add/i));
        userEvent.click(await screen.findByText(/Add/i));
    });
});
