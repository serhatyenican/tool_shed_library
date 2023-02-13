import { ProductI } from "./product";

export interface UserI {
    id: string;
    userName: string;
    email: string;
    passwd: string;
    favorites: Array<ProductI>;
    userProducts: Array<string>;
}

export interface ProtoUserI {
    id?: string;
    userName?: string;
    email?: string;
    passwd?: string;
    favorites?: Array<string>;
    userProducts?: Array<string>;
}
