import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../services/store/store";
import { FinishWithProduct } from "./finishWithProduct";

describe("Given the finish with product component", () => {
    test("it should launch an action", async () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <FinishWithProduct id={"123"} />
                </Provider>
            </Router>
        );

        fireEvent.click(screen.getByRole("button"));
        userEvent.click(await screen.findByText(/earliest/i));
    });
});
