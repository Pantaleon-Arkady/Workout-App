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
                <div className="text-center text-md-start fs-2 fw-bold">
                    Workout Tracker
                </div>
            </div>
            <div className="border d-flex flex-column flex-md-row flex-grow-1 justify-content-center align-items-center px-4">
                <div className="landing_greetings_wrapper px-3 px-md-0 w-100 w-md-50">
                    <p className="text-center landing_greetings">
                        This app serves as a tracker and note for your workout progess, it helps for easier readability and visualizations of your workouts.
                    </p>
                </div>
                <div className="px-3 w-100 w-md-50">
                    {isRegister?
                        <RegisterForm/>
                        :
                        <LoginForm />
                    }
                </div>
                <label className="mt-3  d-md-none">
                    <a onClick={showLogIn}>Log in </a>
                    or
                    <a onClick={showRegister}> Register?</a>
                </label>
            </div>
        </div>
    );
}

export default LandingPage;