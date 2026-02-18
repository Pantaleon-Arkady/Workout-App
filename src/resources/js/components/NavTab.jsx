import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NavTab() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navBtn = document.getElementById("navBtn");

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        user ?
            <>
                <button
                    className="btn btn-outline-secondary"
                    id="navBtn" >
                    Nav
                </button>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger"
                >
                    Logout
                </button>
            </>
            :
            <></>
    )
}

export default NavTab;