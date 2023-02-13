import { useProducts } from "../../../../infrastructure/services/product/hooks/useProducts";
import { ProductI } from "../../../../models/product";
import { ProductItem } from "../../productItem/productItem";
import styles from "./electricalPage.module.css";

function ElectricalPage() {
    const { products } = useProducts();

    if (products.length === 0) return <>'loading...'</>;

    const electricalProducts = products.filter(
        (item) => item.category === "electrical_paint"
    );

    return (
        <>
            <p className={styles.title}>
                These are our available products for your electrical & paint
                projects
            </p>
            <ul className={styles.electrical__products}>
                {electricalProducts.map((item: ProductI) => (
                    <ProductItem item={item} key={item.id}></ProductItem>
                ))}
            </ul>
        </>
    );
}

export default ElectricalPage;
