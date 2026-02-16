import Headers from "../components/Header";
import { useAuth } from "../context/AuthContext";

function Home() {
    const { user, loading } = useAuth();

    if (loading) {
        return <p className="text-white">Loading...</p>;
    }

    if (!user) {
        return <p className="text-white">Please Log in</p>;
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