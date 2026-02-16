import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Headers({ rightFeature }) {

const {user, logout} = useAuth();

return (
        <div className="bg-black px-5 py-4 text-center d-flex flex-row justify-content-between">
            <div className="text-center text-md-start fs-2 fw-bold">
                Workout Tracker
            </div>
            {rightFeature?
                (<>SignUp</>)
                :
                (<>About Us</>)
            }
        </div>
    )
}

export default Headers;