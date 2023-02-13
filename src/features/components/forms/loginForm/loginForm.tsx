import { SyntheticEvent, useState } from "react";

import styles from "./loginForm.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../services/user/hooks/useUser";

export function LoginForm() {
    const { handleLogin } = useUsers();
    const navigate = useNavigate();

    const formInitialState = { email: "", passwd: "" };
    const [login, setLogin] = useState(formInitialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setLogin({ ...login, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        Swal.fire("Welcome", "Now you can interact with our app", "success");
        handleLogin(login);
        setLogin(formInitialState);
        navigate("/home");
    };

    return (
        <div>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2 className={styles.signin}>Sign in here</h2>
                <label>
                    <input
                        className={styles.email}
                        type="email"
                        name="email"
                        required
                        placeholder="email"
                        value={login.email}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        className={styles.password}
                        type="password"
                        name="passwd"
                        required
                        placeholder="Password"
                        value={login.passwd}
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <button className={styles.btnlogin} type="submit">
                        Login
                    </button>
                </label>
                <p className={styles.forgot}> Forgot your Password?</p>
            </form>
        </div>
    );
}
