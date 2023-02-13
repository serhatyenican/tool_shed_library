import { useProducts } from "../../../../infrastructure/services/product/hooks/useProducts";
import { ProductI } from "../../../../models/product";
import { ProductItem } from "../../productItem/productItem";
import styles from "./generalPurposePage.module.css";

function GeneralPurposePage() {
    const { products } = useProducts();

    if (products.length === 0) return <>'loading...'</>;

    const generalProducts = products.filter(
        (item) => item.category === "general"
    );
    return (
        <>
            <p className={styles.title}>
                These are our tools for general purpose in your projects
            </p>
            <ul className={styles.general__products}>
                {generalProducts.map((item: ProductI) => (
                    <ProductItem item={item} key={item.id}></ProductItem>
                ))}
            </ul>
        </>
    );
}

export default GeneralPurposePage;
