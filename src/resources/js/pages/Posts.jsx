import { useState, useEffect } from "react";
import Headers from "../components/Header";
import axios from "../../../axios";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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
                <div className="text-white">Posts retrieved: {posts.length}</div>
            )}
        </div>
    )
}

export default Posts;