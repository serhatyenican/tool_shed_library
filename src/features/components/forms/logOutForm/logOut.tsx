import { useUsers } from "../../../../services/user/hooks/useUser";


function Logout() {
    const { handleLogout } = useUsers();

    return (
        <div>
            <a href="/home">
                <button onClick={handleLogout}>Logout</button>
            </a>
        </div>
    );
}
export default Logout;
