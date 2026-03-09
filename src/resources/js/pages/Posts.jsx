import { useState, useEffect } from "react";
import Headers from "../components/Header";
import axios from "../../../axios";
import GreetingsDiv from "../components/Greetings";
import { useAuth } from "../context/AuthContext";
import { Dropdown } from "react-bootstrap";
import SortPosts from "../components/SortPosts";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useAuth();

    async function fetchPost(userId = null) {
        setLoading(true);

        try {
            let url = "/api/posts";

            if (userId) {
                url = `/api/posts?user_id=${userId}`;
            }

            const res = await axios.get(url);

            console.log("API reponse:", res);

            const json = res.data;

            console.log("JSON:", json);

            setPosts(Array.isArray(json.data) ? json.data : []);
        } catch (err) {
            console.error("Fetch failed:", err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    const sortPosts = async (type) => {

        let params = {};
    
        if (type === "user") {
            params.user_id = user.id;
        }
    
        if (type === "latest") {
            params.sort = "latest";
        }
    
        if (type === "oldest") {
            params.sort = "oldest";
        }
    
        const res = await axios.get("/api/posts", { params });
    
        setPosts(res.data.data);
    };

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers
                rightFeature={true}
                page="post"
                onSort={sortPosts}
            />
            {loading && <span>Loading Posts...</span>}

            {!loading && posts.length == 0 && (
                <div className="text-white">No posts retrieved</div>
            )}

            {!loading && posts.length > 0 && (
                <div className="d-flex homepage_main_div">
                    <div className="desktop_side_tab border w-25 flex-column align-items-center">
                        <GreetingsDiv
                            username={user.name}
                        />
                        <SortPosts 
                            onSort={sortPosts}
                        />
                    </div>
                    <div className="border pt-1 pt-md-4 home_content d-flex flex-column align-items-center" >
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