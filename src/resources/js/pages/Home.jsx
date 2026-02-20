import Headers from "../components/Header";
import { useAuth } from "../context/AuthContext";
import GreetingsDiv from "../components/Greetings";

function Home() {
    const { user, loading } = useAuth();

    if (loading) {
        return <p className="text-white">Loading...</p>;
    }

    if (!user) {
        return (
            <>
                <Headers rightFeature={true} />
                <p className="text-white">Please Log in</p>
            </>
        );
    }

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers
                rightFeature={true}
            />
            <div className="d-flex homepage_main_div">
                <GreetingsDiv
                    username={user.name}
                />
                <div>
                    2nd main
                </div>
            </div>
        </div>
    );
}

export default Home;