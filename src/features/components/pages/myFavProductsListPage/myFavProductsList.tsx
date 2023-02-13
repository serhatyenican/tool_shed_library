
import { ProductI } from "../../../../models/product";
import { UserI } from "../../../../models/user";
import { useUsers } from "../../../../services/user/hooks/useUser";
import { RemoveFavs } from "../../favsButtons/removeFavsButton/removeFavsButton";
import { RequestProduct } from "../../RequestButtons/requestButtons/requestProduct";

import styles from "./myFavProductsList.module.css";

function MyFavProductsList() {
    const { users } = useUsers();

    if (users.user === null) return <p>loading</p>;

    return (
        <>
            <h2>Your Favorite tools are here</h2>
            <section>
                {users.user.favorites.length > 0 ? (
                    <ul className={styles.fav__products}>
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

                                    <RequestProduct
                                        id={item.id}
                                        isAvailable={item.isAvailable}
                                    ></RequestProduct>
                                    <RemoveFavs id={item.id}></RemoveFavs>
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <p>You still do not have favorite tools in your list.</p>
                )}
            </section>
        </>
    );
}

export default MyFavProductsList;
