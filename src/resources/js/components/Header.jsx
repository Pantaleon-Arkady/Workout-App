import NavTab from "./NavTab";
import Post from "../forms/post";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Headers({ rightFeature, page }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch("http://localhost:8000/sanctum/csrf-cookie", {
            credentials: "include"
        });
    
        await fetch("http://localhost:8000/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "Accept": "application/json"
            }
        });
    };

    const handleHome = () => {
        navigate("/home");
    }

    const handlePosts = () => {
        navigate("/post");
    }

    if (!user) {
        return (
            <div className="bg-black px-3 py-4 text-center d-flex flex-row justify-content-between">
                <div className="text-center text-md-start fs-2 fw-bold text-white">
                    Workout Tracker
                </div>
            </div>
        )
    }

    return (
        <div className="bg-black px-3 py-4 text-center d-flex flex-row justify-content-between">

            <div className="mobile_header_feature">
                {rightFeature ?
                    (
                        <NavTab />
                    )
                    :
                    (<></>)
                }
            </div>

            <div className="header-app-name text-center text-md-start fs-2 fw-bold d-flex flex-row justify-content-between">
                <div
                    className={`
                    ${page === "post" ? "d-none d-md-block" : ""}
                    `}
                >
                    Workout Tracker
                </div>
            </div>

            {page === "post" && (
                <Post />
            )}

            <div className="desktop_header_feature w-25 flex-row justify-content-around">
                <button
                    onClick={handleHome}
                    className="btn btn-outline-primary"
                >
                    Home
                </button>
                <button
                    onClick={handlePosts}
                    className="btn btn-outline-primary"
                >
                    Post
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Headers;