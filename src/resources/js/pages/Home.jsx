import Headers from "../components/Header";
import { useAuth } from "../context/AuthContext";
import GreetingsDiv from "../components/Greetings";
import Tracker from "../components/Tracker";

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
                <div className="desktop_side_tab border w-25">
                    Desktop side tab
                </div>
                <div className="border p-1 home_content">
                    <GreetingsDiv
                        username={user.name}
                    />
                    <Tracker />
                </div>
            </div>
        </div>
    );
}

export default Home;