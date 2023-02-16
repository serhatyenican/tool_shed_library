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
                            src="https://firebasestorage.googleapis.com/v0/b/the-tool-shed-library.appspot.com/o/homepage%2Fgarden.webp?alt=media&token=3fefbc21-56db-4b64-95f4-174da30a9916"
                            alt="Garden Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/general"}>
                        <img
                            className={styles.category__products}
                            src="https://firebasestorage.googleapis.com/v0/b/the-tool-shed-library.appspot.com/o/homepage%2Fgeneral.webp?alt=media&token=f1a408f3-ffe3-47c1-93e2-3816e07f6f2d"
                            alt="General Purpose Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/wood"}>
                        <img
                            className={styles.category__products}
                            src="https://firebasestorage.googleapis.com/v0/b/the-tool-shed-library.appspot.com/o/homepage%2Fwood.webp?alt=media&token=b76de871-e0ef-40a0-8e27-7883606fd70e"
                            alt="Woodworking Category"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={"/electrical"}>
                        <img
                            className={styles.category__products}
                            src="https://firebasestorage.googleapis.com/v0/b/the-tool-shed-library.appspot.com/o/homepage%2Felectrical.webp?alt=media&token=b4626e17-6890-4026-9a4c-c54c66380093"
                            alt="Electrical & Paint Category"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default HomePage;
