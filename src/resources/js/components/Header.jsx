import NavTab from "./NavTab";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Headers({ rightFeature, postPage }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

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

            <div className="header-app-name text-center text-md-start fs-2 fw-bold">
                Workout Tracker
            </div>

            {postPage ?
                <>Post Feature</>
                :
                <></>
            }

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