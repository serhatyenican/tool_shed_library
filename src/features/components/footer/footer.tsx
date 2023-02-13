import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <Link to="/home">
                    <img
                        className={styles.home}
                        src="../assets/home.logo.svg"
                        alt="Home"
                    ></img>
                </Link>
                <address>The Tool Shed Library</address>
            </div>
        </footer>
    );
}
