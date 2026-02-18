import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function NavTab() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navBtn = useRef(null);
    const navTab = useRef(null);
    const closeNav = useRef(null);
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
                        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
                    >
                        <div 
                            className="w-75 d-flex flex-column p-2 bg-black h-100"
                        >
                            <div className="d-flex justify-content-end pb-3">
                                <button
                                    ref={closeNav}
                                    onClick={() => setNav(false)}
                                    className="btn btn-outline-light"
                                >
                                    X
                                </button>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline-danger"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </>
            :
            <></>
    )
}

export default NavTab;