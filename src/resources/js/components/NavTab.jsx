import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function NavTab() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navBtn = useRef(null);
    const navTab = useRef(null);
    const [nav, setNav] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        user ?
            <>
                <button
                    className="btn btn-outline-secondary"
                    ref={navBtn}
                    onClick={() => setNav(!nav)}
                >
                    Nav
                </button>
                {nav && (
                    <div
                        ref={navTab}
                        className="fixed inset-0 z-50 hidden bg-whited"
                    >
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-danger"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </>
            :
            <></>
    )
}

export default NavTab;