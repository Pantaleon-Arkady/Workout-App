import { Link } from "react-router-dom";
import RegisterForm from "../forms/register";
import LoginForm from "../forms/login";
import { useState } from "react";

function LandingPage() {

    const [isRegister, setIsRegister] = useState(false);

    const showLogIn = () => {
        setIsRegister(false);
    };

    const showRegister = () => {
        setIsRegister(true);
    };

    return (
        <div className="d-flex flex-column text-white vh-100">
            <div className="border bg-black px-5 py-4 text-center">
                <div className="fs-2 fw-bold">
                    Workout Tracker
                </div>
            </div>
            <div className="border d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <div className="text-xxs text-center px-3">
                    This app serves as a tracker and note for your workout progess, it helps for easier readability and visualizations of your workouts.
                </div>
                {isRegister?
                    <RegisterForm/>
                    :
                    <LoginForm />
                }
                <div className="mt-3 text-xs">
                    <a onClick={showLogIn}>Log in </a>
                    or
                    <a onClick={showRegister}> Register?</a>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;