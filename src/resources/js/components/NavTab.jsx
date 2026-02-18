import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NavTab() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navBtn = document.getElementById("navBtn");
    const navTab = document.getElementById("navTab");

    navBtn.addEventListener('click', {
        navTab.classList.remove('hidden')
    });

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
                <div
                    id="navTab"
                    className="fixed inset-0 z-50 hidden"
                >
                    <button
                        onClick={handleLogout}
                        className="btn btn-outline-danger"
                    >
                        Logout
                    </button>
                </div>
            </>
            :
            <></>
    )
}

export default NavTab;