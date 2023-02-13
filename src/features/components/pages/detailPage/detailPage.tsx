import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProducts } from "../../../../infrastructure/services/product/hooks/useProducts";
import { useEffect } from "react";
import styles from "./detailPage.module.css";

function DetailPage() {
    const { productId } = useParams();
    const { products, handleSelect } = useProducts();

    useEffect(() => {
        handleSelect(productId as string);
    });

    if (products.length === 0) return <>Loading...</>;

    return (
        <section className={styles.li__container}>
            <p className={styles.title}>{products[0].name}</p>
            <motion.div
                className={styles["slider-container"]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className={styles.slider}
                    drag="x"
                    dragConstraints={{ right: 0, left: -1123 }}
                >
                    {products[0].images.map((image) => (
                        <motion.div
                            className={styles.item}
                            key={Math.floor(Math.random() * 1000000)}
                        >
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <p>{products[0].description}</p>
        </section>
    );
}

export default DetailPage;
