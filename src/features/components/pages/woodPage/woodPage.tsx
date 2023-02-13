import { useProducts } from "../../../../infrastructure/services/product/hooks/useProducts";
import { ProductI } from "../../../../models/product";
import { ProductItem } from "../../productItem/productItem";
import styles from "./woodPage.module.css";

function WoodPage() {
    const { products } = useProducts();

    if (products.length === 0) return <>'loading...'</>;

    const woodProducts = products.filter((item) => item.category === "wood");

    return (
        <>
            <p className={styles.title}>
                These are our available tools for your woodworking projects
            </p>
            <ul className={styles.wood__products}>
                {woodProducts.map((item: ProductI) => (
                    <ProductItem item={item} key={item.id}></ProductItem>
                ))}
            </ul>
        </>
    );
}

export default WoodPage;
