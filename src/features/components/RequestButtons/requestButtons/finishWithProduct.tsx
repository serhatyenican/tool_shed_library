import { SyntheticEvent } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "./finishWithProduct.module.css";
import { useUsers } from "../../../../services/user/hooks/useUser";

export function FinishWithProduct({ id }: { id: string }) {
    const { handleFinishWithProduct } = useUsers();
    const navigate = useNavigate();
    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleFinishWithProduct(id);
        Swal.fire(
            "Great!",
            "Come to our front desk to return your tool at your earliest convenience.",
            "success"
        );
        navigate("/home");
    };

    return (
        <>
            <button className={styles.button} onClick={handleClick}>
                Return this Tool
            </button>
        </>
    );
}
