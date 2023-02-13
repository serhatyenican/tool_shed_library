import { Link } from "react-router-dom";
import { useUsers } from "../../services/user/hooks/useUser";

export function Menu() {
    const { users } = useUsers();

    const menuOptions = [
        { id: "1", path: "home", label: "Home" },
        { id: "2", path: "electrical", label: "Electrical & Paint" },
        { id: "3", path: "garden", label: "Garden" },
        { id: "4", path: "wood", label: "WoodWorking" },
        { id: "5", path: "general", label: "General" },
        { id: "6", path: "howDoesItWork", label: "How Does it Work?" },
    ];

    if (!users.isLogged) {
        menuOptions.push(
            { id: "7", path: "Register", label: "Register" },
            { id: "8", path: "Login", label: "Login" }
        );
    } else {
        menuOptions.push(
            { id: "9", path: "ProductsFav", label: "My Favourites List" },
            { id: "10", path: "ToolsInUse", label: "Tools I am using" },
            { id: "11", path: "Logout", label: "Logout" },
            { id: "12", path: "delete", label: "Delete Account" }
        );
    }
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
