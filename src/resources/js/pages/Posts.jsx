import { useState, useEffect } from "react";
import Headers from "../components/Header";
import axios from "../../../axios";
import GreetingsDiv from "../components/Greetings";
import { useAuth } from "../context/AuthContext";
import { Dropdown } from "react-bootstrap";
import SortPosts from "../components/SortPosts";
import SearchPost from "../components/SearchPost";
import ModPost from "../components/ModPost";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        user_id: null,
        sort: "latest"
    });

    const { user } = useAuth();

    function updateURL(pageNumber, filtersValue, searchValue) {

        const params = new URLSearchParams();
    
        params.set("page", pageNumber);
    
        if (searchValue) params.set("search", searchValue);
        if (filtersValue.sort) params.set("sort", filtersValue.sort);
        if (filtersValue.user_id) params.set("user_id", filtersValue.user_id);
    
        window.history.pushState({}, "", `?${params.toString()}`);
    }

    async function fetchPosts(pageNumber = page, newFilters = filters, searchValue = search) {

        setLoading(true);
    
        updateURL(pageNumber, newFilters, searchValue);
    
        try {
            const res = await axios.get("/api/posts", {
                params: {
                    page: pageNumber,
                    user_id: newFilters.user_id,
                    sort: newFilters.sort,
                    search: searchValue
                }
            });
    
            setPosts(res.data.data);
            setPage(res.data.current_page);
            setLastPage(res.data.last_page);
    
        } catch (err) {
            console.error("Fetch failed:", err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
    
        const pageParam = Number(params.get("page")) || 1;
        const searchParam = params.get("search") || "";
        const sortParam = params.get("sort") || "latest";
        const userParam = params.get("user_id");
    
        const newFilters = {
            user_id: userParam,
            sort: sortParam
        };
    
        setSearch(searchParam);
        setFilters(newFilters);
        setPage(pageParam);
    
        fetchPosts(pageParam, newFilters, searchParam);
    }, []);

    const sortPosts = (type) => {

        let newFilters = { ...filters };

        if (type === "all") {
            newFilters.user_id = null;
        }

        if (type === "user") {
            newFilters.user_id = user.id;
        }

        if (type === "latest") {
            newFilters.sort = "latest";
        }

        if (type === "oldest") {
            newFilters.sort = "oldest";
        }

        setFilters(newFilters);

        fetchPosts(1, newFilters);
    };

    const handleSearch = (value) => {
        setSearch(value);
        fetchPosts(1, filters, value);
    }

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers
                rightFeature={true}
                page="post"
                onSort={sortPosts}
            />

            <div className="d-flex homepage_main_div">
                <div className="desktop_side_tab border w-25 flex-column align-items-center">
                    <GreetingsDiv
                        username={user?.name}
                    />
                    <SortPosts
                        onSort={sortPosts}
                    />
                </div>
                <div className="border pt-1 pt-md-4 home_content d-flex flex-column align-items-center" >
                    <SearchPost
                        search={handleSearch}
                    />
                    {loading && <span>Loading Posts...</span>}

                    {!loading && posts.length == 0 && (
                        <div className="text-white">No posts retrieved</div>
                    )}

                    {!loading && posts.length > 0 && (
                        <div className="d-flex flex-column align-items-center">
                            {posts.map((post) => (
                                <div key={post.id} className="each_post_div border pt-2 rounded p-1 mb-3 bg-black">
                                    <div className="d-flex flex-row justify-content-between reg_fs border-bottom">
                                        <span>{post.user.name}</span>
                                        <span>
                                            {new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ~ {new Date(post.created_at).toLocaleDateString()} {" "}
                                        </span>
                                    </div>
                                    <div className="mt-1 w-100 d-flex flex-row justify-content-between">
                                        <span>
                                            {post.title}
                                        </span>
                                        {post.user_id === user?.id && (
                                            <ModPost
                                                postId={post.id}
                                            />
                                        )
                                        }
                                    </div>
                                    <hr />
                                    <div className="content_fs">
                                        {post.content}
                                    </div>
                                </div>
                            ))}
                            <div className="d-flex gap-2 mt-3 p-2 m-2">

                                <button
                                    className="btn btn-outline-primary"
                                    disabled={page === 1}
                                    onClick={() => fetchPosts(page - 1)}
                                >
                                    Previous
                                </button>

                                <span className="mt-2">Page {page}</span>

                                <button
                                    className="btn btn-outline-primary"
                                    disabled={page === lastPage}
                                    onClick={() => fetchPosts(page + 1)}
                                >
                                    Next
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Posts;