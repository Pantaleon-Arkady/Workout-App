import { Link } from "react-router-dom";
import RegisterForm from "../forms/register";
import LoginForm from "../forms/login";
import { useState } from "react";
import Headers from "../components/Header";

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
            <Headers 
                rightFeature={false}
                postPage={false}
            />
            <div className="d-flex flex-column flex-md-row flex-grow-1 justify-content-center align-items-center px-4">
                <div className="landing_greetings_wrapper px-3 px-md-0 w-100 w-md-50 d-flex flex-column">
                    <p className="text-center landing_greetings">
                        This app serves as a tracker and note for your workout progess, it helps for easier readability and visualizations of your workouts.
                    </p>
                    <label className="d-none d-md-block">
                        <a onClick={showLogIn}>Log in </a>
                        or
                        <a onClick={showRegister}> Register?</a>
                    </label>
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