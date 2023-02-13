
import { ProductI } from "../../models/product";
import { ProductWithUser, Repository } from "../user/repository";


export class ProductRepository implements Repository<ProductI> {
    url: string;
    constructor(url = "https://tool-shed-library.onrender.com/products") {
        this.url = url;
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }

    getAll(): Promise<Array<ProductI>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
    get(productId: string): Promise<ProductI> {
        return fetch(`${this.url}/${productId}`)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .then((json) => json.product)
            .catch((error) => {
                return `${error}`;
            });
    }
    update(partialProduct: Partial<ProductI>): Promise<ProductI> {
        return fetch(`${this.url}/${partialProduct.id}`, {
            method: "PATCH",
            body: JSON.stringify(partialProduct),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
    query(value: string): Promise<Array<ProductI>> {
        return fetch(`${this.url}/find/${value}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    requestProduct(id: string): Promise<ProductWithUser> {
        return fetch(`${this.url}/requestProduct/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
    finishWithProduct(id: string): Promise<ProductWithUser> {
        return fetch(`${this.url}/finishwithproduct/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return error;
            });
    }
}
