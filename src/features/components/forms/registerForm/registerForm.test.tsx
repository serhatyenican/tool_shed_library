import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../services/store/store";
import { RegisterForm } from "./registerForm";

describe("Given the register form component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    <RegisterForm />
                </Provider>
            </Router>
        );
    });

    test("when text is written in input value, it should be registered in input value", () => {
        const firstTextInput = screen.getByPlaceholderText("Username");
        userEvent.type(firstTextInput, "anita");
        expect(firstTextInput).toHaveValue("anita");
    });

    test("when text is written in second input value, it should be registered in input value", () => {
        const secondTextInput = screen.getByPlaceholderText("email");
        userEvent.type(secondTextInput, "anzuelo@com");
        expect(secondTextInput).toHaveValue("anzuelo@com");
    });

    test("when text is written in second input value, it should be registered in input value", () => {
        const thirdTextInput = screen.getByPlaceholderText("Password");
        userEvent.type(thirdTextInput, "6785687");
        expect(thirdTextInput).toHaveValue("6785687");
    });

    test("When user clicks register button, it should create an event sending info", () => {
        const buttonInput = screen.getByText("Register", {
            selector: "button",
        });

        fireEvent.click(buttonInput);
    });
});
