import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/services/store/store";
import { DeleteUserForm } from "./deleteForm";

describe("Given the delete form component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    <DeleteUserForm />
                </Provider>
            </Router>
        );
    });

    test("when you write text in input, it should register as input value", () => {
        const textInput1 = screen.getByPlaceholderText("Username");
        userEvent.type(textInput1, "paco");
        expect(textInput1).toHaveValue("paco");
    });

    test("As text is written in second input value, it must be recorded in input value", () => {
        const result2 = screen.getByPlaceholderText("email");
        userEvent.type(result2, "paco@com");
        expect(result2).toHaveValue("paco@com");
    });

    test("When text is place in second input value, it has to be read as input value", () => {
        const thirdValue = screen.getByPlaceholderText("Password");
        userEvent.type(thirdValue, "1654687");
        expect(thirdValue).toHaveValue("1654687");
    });

    test("When user clicks register button, it should create an event sending info", () => {
        const btnInput = screen.getByText("Delete", {
            selector: "button",
        });

        fireEvent.click(btnInput);
    });
});
