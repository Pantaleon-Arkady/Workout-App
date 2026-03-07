import { useState, useEffect } from "react";
import Headers from "../components/Header";
import axios from "../../../axios";
import GreetingsDiv from "../components/Greetings";
import { useAuth } from "../context/AuthContext";
import { Dropdown } from "react-bootstrap";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortedPosts, setSortedPosts] = useState([]);

    const { user } = useAuth();

    async function fetchPost() {
        setLoading(true);

        try {
            const res = await axios.get("/api/retrieve-posts");

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

    const sortPosts = (type) => {
        let sorted = [...posts];

        if (type === 'all') {
            sorted = [...posts];
        }

        if (type === 'date_asc') {
            sorted.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }

        if (type === 'date_desc') {
            sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        if (type === 'personal') {
            sorted = sorted.filter(post => post.user_id === user.id);
        }

        setSortedPosts(sorted);
    }

    useEffect(() => {
        setSortedPosts(posts);
    }, [posts]);

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
                    <div className="desktop_side_tab border w-25 flex-column align-items-center">
                        <GreetingsDiv
                            username={user.name}
                        />
                        <Dropdown className="">
                            <Dropdown.Toggle variant="primary">
                                Posts Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => sortPosts('personal')}>Personal Posts</Dropdown.Item>
                                <Dropdown.Item onClick={() => sortPosts('all')}>All Posts</Dropdown.Item>
                                <Dropdown.Item onClick={() => sortPosts('date_asc')}>by Date ASC</Dropdown.Item>
                                <Dropdown.Item onClick={() => sortPosts('date_desc')}>by Date DESC</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="border pt-1 pt-md-4 home_content d-flex flex-column align-items-center" >
                        {sortedPosts.map((post) => (
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