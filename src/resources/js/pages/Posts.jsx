import { useState, useEffect } from "react";
import Headers from "../components/Header";
import axios from "../../../axios";
import GreetingsDiv from "../components/Greetings";
import { useAuth } from "../context/AuthContext";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    async function fetchPost() {
        setLoading(true);

        try {
            const res = await axios.get("/api/retrieve-posts");

            console.log("API reponse:", res);

            const json = res.data;

            console.log("JSON:", json);

            setPosts(Array.isArray(json.data) ? json.data : [])
        } catch (err) {
            console.error("Fetch failed:", err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers
                rightFeature={true}
                page="post"
            />
            {loading && <span>Loading Posts...</span>}

            {!loading && posts.length == 0 && (
                <div className="text-white">No posts retrieved</div>
            )}

            {!loading && posts.length > 0 && (
                <div className="d-flex homepage_main_div">
                    <div className="desktop_side_tab border w-25">
                        <GreetingsDiv
                            username={user.name}
                        />
                    </div>
                    <div className="border pt-1 pt-md-4 home_content d-flex flex-column align-items-center" >
                        {/* <div className="text-white">
                            Posts retrieved: {posts.length}
                        </div> */}
                        {posts.map((post) => (
                                <div key={post.id} className="each_post_div border pt-2 rounded p-1 mb-3">
                                    <div className="d-flex flex-row justify-content-between reg_fs bor">
                                        <span>{post.user.name}</span>
                                        <span>
                                            {new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ~ {new Date(post.created_at).toLocaleDateString()} {" "}
                                        </span>
                                    </div>
                                    <hr></hr>
                                    <div className="content_fs">
                                        {post.content}
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Posts;