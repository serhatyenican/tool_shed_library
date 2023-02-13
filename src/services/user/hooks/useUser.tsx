import { rootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { UserRepository } from "../userRepository";
import { useMemo } from "react";
import * as ac from "../userActionCreators";
import * as acproduct from "../../product/productActionCreators";
import { ProductRepository } from "../../product/productRepository";
import { UserI } from "../../../models/user";

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);
    const apiUser = useMemo(() => new UserRepository(), []);
    const handleLogin = (user: Partial<UserI>) => {
        apiUser
            .login(user)
            .then((response) => dispatcher(ac.userloginActionCreator(response)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleLogout = () => {
        dispatcher(ac.userlogoutActionCreator());
        localStorage.removeItem("token");
    };

    const handleAddToFavorites = (id: string) => {
        apiUser
            .addToFavorites(id)
            .then((user) =>
                dispatcher(ac.useraddtoFavoritesActionCreator(user))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleRemoveFavorites = (id: string) => {
        apiUser
            .removeFavorites(id)
            .then((user: UserI) => {
                return dispatcher(ac.userRemoveFavoritesActionCreator(user));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleRequestProduct = (id: string) => {
        apiProduct
            .requestProduct(id)
            .then((resp) => {
                dispatcher(acproduct.updateActionCreator(resp.product));
                dispatcher(ac.userrequestProductActionCreator(resp.user));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleFinishWithProduct = (id: string) => {
        apiProduct
            .finishWithProduct(id)
            .then((resp) => {
                dispatcher(ac.userrequestProductActionCreator(resp.user));
                dispatcher(acproduct.updateActionCreator(resp.product));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        users,
        handleLogin,
        handleLogout,
        handleAddToFavorites,
        handleRemoveFavorites,
        handleRequestProduct,
        handleFinishWithProduct,
    };
};
