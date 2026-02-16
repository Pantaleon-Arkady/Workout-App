import Headers from "../components/Header";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user } = useAuth();

    if (!user) {
        return <p className="text-white">Loading...</p>;
    }

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers 
                rightFeature={true}
            />
            <h2 className="text-success bg-white rounded">
                {user ? `Welcome back, ${user.name}!` : "Welcome!"}
            </h2>
            <p className="lead bg-white">React Router is navigating client-side.</p>
            <button className="btn btn-success">Bootstrap still works here</button>
        </div>
    );
}

export default Home;