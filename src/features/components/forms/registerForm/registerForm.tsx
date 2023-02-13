import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./registerForm.module.css";
import Swal from "sweetalert2";

export function RegisterForm() {
    const [registerFormState, setRegisterFormState] = useState({
        userName: "",
        passwd: "",
        email: "",
    });
    const navigate = useNavigate();

    async function submitForm(e: React.SyntheticEvent) {
        e.preventDefault();
        await fetch("http://localhost:7700/users/register", {
            method: "POST",
            body: JSON.stringify(registerFormState),
            headers: {
                "content-type": "application/json",
            },
        });
        Swal.fire(
            "Welcome",
            "Now you can login to start interacting with out app",
            "success"
        );
        navigate("/home");
    }

    return (
        <div>
            <form className={styles.loginForm}>
                <h2 className={styles.signin}>Register</h2>
                <label>
                    <input
                        className={styles.username}
                        type="text"
                        name="userName"
                        required
                        placeholder="Username"
                        onChange={(e) => {
                            setRegisterFormState({
                                ...registerFormState,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <input
                        className={styles.email}
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        onChange={(e) => {
                            setRegisterFormState({
                                ...registerFormState,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <input
                        className={styles.password}
                        type="password"
                        name="passwd"
                        required
                        placeholder="Password"
                        onChange={(e) => {
                            setRegisterFormState({
                                ...registerFormState,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <button
                        className={styles.btnlogin}
                        type="submit"
                        onClick={submitForm}
                    >
                        Register
                    </button>
                </label>
            </form>
        </div>
    );
}
