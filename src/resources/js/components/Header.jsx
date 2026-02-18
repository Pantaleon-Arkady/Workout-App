import NavTab from "./NavTab";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Headers({ rightFeature }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
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
            <div className="text-center text-md-start fs-2 fw-bold">
                Workout Tracker
            </div>
            <div className="desktop_header_feature">
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