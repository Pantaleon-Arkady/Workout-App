import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="d-flex flex-column text-white vh-100">
            <div className="border bg-black px-5 py-4 text-center">
                <div className="fs-2 fw-bold">
                    Workout Tracker
                </div>
            </div>
            <div className="border d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <div className="text-xs text-center">
                    This app serves as a tracker and note for your workout progess, it helps for easier readability and visualizations of your workouts.
                </div>
                <form action="" className="border mt-3 p-5 w-80 rounded bg-white text-black">
                        <h4>Register</h4>
                        <div className="border mb-3 mt-3">
                            <label>Username:</label>
                            <input className="form-control" />
                        </div>
                        <div className="border mb-3">
                            <label>Email:</label>
                            <input className="form-control" />
                        </div>
                        <div className="border mb-3">
                            <label>Password:</label>
                            <input className="form-control" />
                        </div>
                        <button className="btn btn-light">
                            Register
                        </button>
                    </form>
            </div>
        </div>
    );
}

export default LandingPage;