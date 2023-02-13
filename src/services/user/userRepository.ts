import { UserI } from "../../models/user";
import { ExtraRepository, UserWithToken } from "./repository";


export class UserRepository implements ExtraRepository<UserI> {
    url: string;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(url = "") {
        this.url = "https://tool-shed-library.onrender.com/users";
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }

    login(user: Partial<UserI>): Promise<UserWithToken> {
        return fetch(`${this.url}/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) return res.json();
                throw this.createError(res);
            })

            .then((response) => {
                localStorage.setItem("token", response.token);
                return response;
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    addToFavorites(id: string): Promise<UserI> {
        return fetch(`${this.url}/addProduct`, {
            method: "PATCH",
            body: JSON.stringify({ id }),
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    removeFavorites(id: string): Promise<UserI> {
        return fetch(`${this.url}/removeProduct/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                return `${error}`;
            });
    }
}
