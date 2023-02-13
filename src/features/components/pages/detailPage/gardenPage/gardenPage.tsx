import { ProductI } from "../../../../../models/product";
import { useProducts } from "../../../../../services/product/hooks/useProducts";
import { ProductItem } from "../../../productItem/productItem";
import styles from "./gardenPage.module.css";

function GeneralPurpose() {
    const { products } = useProducts();

    if (products.length === 0) return <>'loading...'</>;

    const gardenProducts = products.filter(
        (item) => item.category === "garden"
    );

    return (
        <>
            <p className={styles.title}>
                These are our products for your garden projects
            </p>
            <ul className={styles.garden__products}>
                {gardenProducts.map((item: ProductI) => (
                    <ProductItem item={item} key={item.id}></ProductItem>
                ))}
            </ul>
        </>
    );
}

export default GeneralPurpose;
