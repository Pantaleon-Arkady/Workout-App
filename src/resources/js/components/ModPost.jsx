import { useState } from "react";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";

function ModPost({ postId, onDelete }) {
    const [mod, setMod] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.post("/delete-post", { postId }, { withCredentials: true });

            onDelete();
        } catch {
            console.error(err);
        }
    }

    return (
        <>
            <button
                onClick={() => setMod(!mod)}
            >
                <img src="/statics/three-v-dot.svg" />
            </button>
            {mod &&
                <div className="nav_tab position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
                    <div className="post_mod_div p-2 bg-black rounded">
                        <button
                            onClick={() => navigate(`/post/${postId}/edit`)}
                            className="btn btn-outline-primary"
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => handleDelete()}
                            className="btn btn-outline-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default ModPost;