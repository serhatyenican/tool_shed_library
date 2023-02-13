import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./addToFavsButton.module.css";
import Swal from "sweetalert2";
import { useUsers } from "../../../../services/user/hooks/useUser";

export function AddToFavs({ id }: { id: string }) {
    const { handleAddToFavorites } = useUsers();
    const navigate = useNavigate();
    const { users } = useUsers();
    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleAddToFavorites(id);
        if (users.isLogged) {
            Swal.fire(
                "Success!",
                "This product has been added to your favorites.",
                "success"
            );
            navigate("/ProductsFav");
        } else {
            Swal.fire(
                "Ooops!",
                "You must be logged in order to interact with this app.",
                "error"
            );
        }
    };

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>
                Add to your Favs
            </button>
        </>
    );
}
