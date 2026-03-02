import { useState, useRef } from "react";

function Post() {
    const [postForm, setPostForm] = useState(false);
    const postFormDiv = useRef(null);

    return (
        <>
            <button 
                className="btn btn-primary"
                onClick={() => setPostForm(!postForm)}
            >
                Create Post
            </button>
            {postForm && (
                <div
                    ref={postFormDiv}
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
                >
                    <form>
                        Post Form
                    </form>
                </div>
            )
            }
        </>
    )
}

export default Post;