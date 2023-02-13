import { ProductI } from "../../models/product";
import { UserI } from "../../models/user";

export interface Repository<P> {
    getAll: () => Promise<Array<P>>;
    get?: (id: string) => Promise<P>;
    update: (item: Partial<P>) => Promise<P>;
    query: (query: string) => Promise<Array<P>>;
}
export interface UserWithToken {
    token: string;
    user: UserI;
}

export type ProductWithUser = { product: ProductI; user: UserI };

export interface ExtraRepository<UserI> {
    login: (user: Partial<UserI>) => Promise<UserWithToken>;
    addToFavorites: (id: string) => Promise<UserI>;
    removeFavorites: (id: string) => Promise<UserI>;
}
