import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../infrastructure/services/user/hooks/useUser";
import styles from "./deleteForm.module.css";
import Swal from "sweetalert2";

export function DeleteUserForm() {
    const { users } = useUsers();
    const [deleteUserFormState, setDeleteUserFormState] = useState({
        userName: "",
        passwd: "",
        email: "",
    });
    const navigate = useNavigate();

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault();
        fetch(`http://localhost:7700/users/delete/${users.user?.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${users.token}`,
            },
        });
        Swal.fire(
            "Done!",
            "If you ever want to come back, just register again.",
            "success"
        );
        navigate("/home");
    };

    return (
        <div>
            <form className={styles.loginForm}>
                <h2 className={styles.signin}>Delete Account</h2>
                <label>
                    <input
                        className={styles.username}
                        type="text"
                        name="userName"
                        required
                        placeholder="Username"
                        onChange={(e) => {
                            setDeleteUserFormState({
                                ...deleteUserFormState,
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
                            setDeleteUserFormState({
                                ...deleteUserFormState,
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
                            setDeleteUserFormState({
                                ...deleteUserFormState,
                                [e.target.name]: e.target.value.trim(),
                            });
                        }}
                    />
                </label>
                <label>
                    <button className={styles.btnlogin} onClick={submitForm}>
                        Delete
                    </button>
                </label>
            </form>
        </div>
    );
}
