import { Footer } from "../../features/components/footer/footer";
import Header from "../../features/components/header/header";
import styles from "./layout.module.css";

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main className={styles.container__main}>{children}</main>
            <Footer></Footer>
        </>
    );
}
