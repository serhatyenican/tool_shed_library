import { SyntheticEvent } from "react";
import { useUsers } from "../../../../services/user/hooks/useUser";

import styles from "./removeFavsButton.module.css";

export function RemoveFavs({ id }: { id: string }) {
    const { handleRemoveFavorites } = useUsers();

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        handleRemoveFavorites(id);
    };

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>
                Remove from your Favs
            </button>
        </>
    );
}
