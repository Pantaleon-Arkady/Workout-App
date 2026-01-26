import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="d-flex flex-column text-white vh-100">
            <div className="border bg-black px-5 py-4">
                <div>
                    Head Nav
                </div>
            </div>
            <div className="border flex-grow-1 w-100 d-flex flex-row">
                <div className="border w-50 d-flex align-items-center justify-content-end pe-5">
                    <div className="border px-5 py-3">
                        This is a Workout Tracker Web Application.
                    </div>
                </div>
                <div className="border w-50 d-flex align-items-center justify-content-start ps-5">
                    <div className="border p-5">
                        Sign up Div
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;