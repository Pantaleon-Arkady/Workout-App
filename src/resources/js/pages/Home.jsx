import { useLocation } from "react-router-dom";

function Home() {
    const { state } = useLocation();
    const user = state?.user;

    return (
        <div className="container mt-5">
            <h2 className="text-success bg-white rounded">
                {user ? `Welcome back, ${user.name}!` : "Welcome!"}
            </h2>
            <p className="lead bg-white">React Router is navigating client-side.</p>
            <button className="btn btn-success">Bootstrap still works here</button>
        </div>
    );
}

export default Home;