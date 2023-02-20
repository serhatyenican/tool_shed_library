import { Footer } from "../../features/components/footer/footer";
import Header from "../../features/components/header/header";


export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main> {children}</main>
            <Footer></Footer>
        </>
    );
}
