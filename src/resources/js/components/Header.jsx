import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Headers({ rightFeature }) {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    }

    return (
        <div className="bg-black px-5 py-4 text-center d-flex flex-row justify-content-between">
            <div className="text-center text-md-start fs-2 fw-bold">
                Workout Tracker
            </div>
            {rightFeature?
                (
                    user? 
                    (
                        <button 
                            onClick={handleLogout}
                            className="btn btn-outline-danger"
                        >
                            Logout
                        </button>
                    ) 
                    : 
                    (<>Login</>)
                )
                :
                (<>About Us</>)
            }
        </div>
    )
}

export default Headers;