import NavTab from "./NavTab";
import Post from "../forms/post";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";

function Headers({ rightFeature, page, onSort }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

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
                <Post
                    onSort={onSort}
                />
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