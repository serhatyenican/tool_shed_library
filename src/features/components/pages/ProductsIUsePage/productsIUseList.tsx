import { useUsers } from "../../../../infrastructure/services/user/hooks/useUser";
import { ProductI } from "../../../../models/product";
import { UserI } from "../../../../models/user";
import { FinishWithProduct } from "../../RequestButtons/requestButtons/finishWithProduct";
import styles from "./productsIUseList.module.css";

function ProductsIUse() {
    const { users } = useUsers();

    if (users.user === null) return <p>loading</p>;
    return (
        <>
            <h2>These are the tools you are renting</h2>
            <section>
                {users.user.favorites.length > 0 ? (
                    <ul className={styles.my__products}>
                        {(users.user as UserI).favorites.map(
                            (item: ProductI) => (
                                <li key={item.id}>
                                    <p className={styles.title}>{item.name}</p>
                                    <p className={styles.text}>
                                        {item.category}
                                    </p>

                                    <img
                                        className={styles.img}
                                        src={item.images[0]}
                                        alt={item.name}
                                    />

                                    <div className={styles.limit}>
                                        <p className={styles.text}>
                                            {item.description}
                                        </p>
                                    </div>

                                    <FinishWithProduct
                                        id={item.id}
                                    ></FinishWithProduct>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <p>You still do not have tools rented to you.</p>
                )}
            </section>
        </>
    );
}

export default ProductsIUse;
