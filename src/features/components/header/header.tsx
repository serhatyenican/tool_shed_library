import { DrawerMenu } from "../drawer/drawer";

import styles from "./header.module.css";

function Header() {
    return (
        <>
            <header className={styles.header}>
                <h2 className={styles.welcome__text} >Welcome to the Tool Shed Library</h2>
                <div className={styles.header__container}>
                    <div className={styles.menu}>
                        <DrawerMenu></DrawerMenu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
