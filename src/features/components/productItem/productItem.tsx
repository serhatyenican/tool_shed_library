import { Link } from "react-router-dom";
import { ProductI } from "../../../models/product";
import { AddToFavs } from "../favsButtons/addToFavsButton/addToFavsButton";

import styles from "./productItem.module.css";

export function ProductItem({ item }: { item: ProductI }) {
    return (
        <li key={item.id} className={styles.item__container}>
            <p className={styles.title}>{item.name}</p>

            <div>
                <Link to={"/DetailPage/" + item.id}>
                    <img
                        className={styles.image}
                        src={item.images[0]}
                        alt={item.name}
                    />
                </Link>
            </div>
            <AddToFavs id={item.id}></AddToFavs>
        </li>
    );
}
