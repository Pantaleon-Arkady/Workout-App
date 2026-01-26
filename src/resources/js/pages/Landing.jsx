import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="container mt-5">
            <h1 style={{ color: "red" }}>
                Landing page is rendering
            </h1>
            <button className="btn btn-primary me-2">Tests Bootstrap</button>
            <Link to="/home" className="btn btn-secondary">
                Go to /home (test navigation)
            </Link>
        </div>
    );
}

export default LandingPage;