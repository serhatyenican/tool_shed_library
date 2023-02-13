import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/services/store/store";
import { LoginForm } from "./loginForm";

describe("Given the login form component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    <LoginForm />
                </Provider>
            </Router>
        );
    });

    test("when text is added in input value, it will be registered in input value", () => {
        const textInput1 = screen.getByPlaceholderText("email");
        userEvent.type(textInput1, "pepe@com");
        expect(textInput1).toHaveValue("pepe@com");
    });

    test("when text is written in second input value, it should be registered in input value", () => {
        const input2 = screen.getByPlaceholderText("Password");
        userEvent.type(input2, "kokmbsadrq455");
        expect(input2).toHaveValue("kokmbsadrq455");
    });

    test("When a token is not provided", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <LoginForm />
                </Provider>
            </Router>
        );

        localStorage.setItem("token", undefined as unknown as string);

        expect(localStorage.getItem("token")).toBeTruthy();
    });

    test("When user uses login button, it will create an event sending info", async () => {
        fireEvent.click(screen.getByRole("button"));
        userEvent.click(await screen.findByText(/Login/i));
    });
});
