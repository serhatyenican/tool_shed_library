import { Link } from "react-router-dom";

import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer>
            <div className={styles.footer__container}>
                <Link to="/home">
                    <img
                        className={styles.home}
                        src="../assets/home.logo.svg"
                        alt="Home"
                    ></img>
                </Link>

                <address className={styles.address} >By Rafael Garcia Lopez</address>
            </div>
        </footer>
    );
}
