import { SyntheticEvent } from "react";
import styles from "./requestProduct.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../../services/user/hooks/useUser";

export function RequestProduct({
    id,
    isAvailable,
}: {
    id: string;
    isAvailable: boolean;
}) {
    const { handleRequestProduct } = useUsers();
    const navigate = useNavigate();

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleRequestProduct(id);
        if (isAvailable) {
            Swal.fire(
                "Success!",
                "Come to our front desk to take your tool at your earliest convenience",
                "success"
            );
            navigate("/toolsInUse");
        } else {
            Swal.fire(
                "Sorry!",
                "This tool is rented to another user. We will notify you as soon as it is available again",
                "error"
            );
        }
    };

    return (
        <button
            className={isAvailable ? styles.available : styles.not__available}
            onClick={handleClick}
            disabled={!isAvailable}
        >
            Request this Tool
        </button>
    );
}
