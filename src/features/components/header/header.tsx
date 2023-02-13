import { Menu } from "../../../infrastructure/menu/menu";
import styles from "./header.module.css";

function Header() {
    return (
        <>
            <header className={styles.header}>
                <h2>Welcome to the Tool Shed Library</h2>
                <div className={styles.header__container}>
                    <div className={styles.menu}>
                        <Menu></Menu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
