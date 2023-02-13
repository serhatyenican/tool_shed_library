import { UserI } from "./user";

export interface ProductI {
    id: string;
    name: string;
    category: string;
    isAvailable: boolean;
    images: Array<string>;
    description: string;
    owner: UserI | null;
}


  
