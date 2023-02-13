import { Link } from "react-router-dom";
import styles from "./homePage.module.css";

function HomePage() {
    return (
        <>
            <p>Welcome! Select a category or Register/Login </p>
            <div className={styles.parent}>
                <div className={styles.title}>
                    <Link to={"/garden"}>
                        <img
                            className={styles.category__products}
                            src="./assets/thumbsmenu/garden2.png"
                            alt="Garden Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/generalPurpose"}>
                        <img
                            className={styles.category__products}
                            src="./assets/thumbsmenu/general2.png"
                            alt="General Purpose Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/wood"}>
                        <img
                            className={styles.category__products}
                            src="./assets/thumbsmenu/wood3.png"
                            alt="Woodworking Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/electrical"}>
                        <img
                            className={styles.category__products}
                            src="./assets/thumbsmenu/electrical2.png"
                            alt="Electrical & Paint Category"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default HomePage;
