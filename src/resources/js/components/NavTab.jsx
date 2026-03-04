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

    const handleLogout = async () => {
        try {
            await axios.post("/logout", {}, { withCredentials: true });
            logout();
            navigate("/");
        } catch (error) {
            const data = error.response?.data;
            console.error(data?.message || "Logout failed");
            alert(data?.message || "Logout failed");
        }
    };

    const handleHome = () => {
        navigate("/home");
    }

    const handlePosts = () => {
        navigate("/post");
    }

    return (
        user ?
            <>
                <button
                    className="btn btn-outline-light p-2 bg-white"
                    onClick={() => setNav(!nav)}
                >
                    <img
                        src="/statics/three-v-dot.svg"
                        alt=""
                        className="w-7 h-7 bg-white p-1.5 rounded-md block"
                    />
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
                                onClick={handleHome}
                                className="btn btn-outline-primary mb-3"
                            >
                                Home
                            </button>
                            <button
                                onClick={handlePosts}
                                className="btn btn-outline-primary mb-3"
                            >
                                Post
                            </button>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline-danger mb-3"
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