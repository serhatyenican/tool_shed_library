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
                            src="gs://the-tool-shed-library.appspot.com/homepage/garden.webp"
                            alt="Garden Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/general"}>
                        <img
                            className={styles.category__products}
                            src="gs://the-tool-shed-library.appspot.com/homepage/general.webp"
                            alt="General Purpose Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/wood"}>
                        <img
                            className={styles.category__products}
                            src="gs://the-tool-shed-library.appspot.com/homepage/wood.webp"
                            alt="Woodworking Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/electrical"}>
                        <img
                            className={styles.category__products}
                            src="gs://the-tool-shed-library.appspot.com/homepage/electrical.webp"
                            alt="Electrical & Paint Category"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default HomePage;
