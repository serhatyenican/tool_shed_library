import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../services/store/store";

import { RemoveFavs } from "./removeFavsButton";

describe("Given the remove favs button component", () => {
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <RemoveFavs id={"123"} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByRole("button"));
        userEvent.click(await screen.findByText(/Remove/i));
    });
});
