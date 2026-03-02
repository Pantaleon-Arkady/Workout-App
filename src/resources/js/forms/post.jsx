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
                    <div
                        className="w-100 d-flex flex-column align-items-center"    
                    >
                        <div className="w-100 d-flex justify-content-end pb-3">
                            <button
                                className="btn btn-outline-light right"
                                onClick={() => setPostForm(!postForm)}
                            >
                                x
                            </button>
                        </div>
                        <form className="w-75 bg-white rounded text-black d-flex flex-column align-items-center p-3">
                            Create a Post?
                            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded pt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title..."
                                />
                            </div>
                            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded pt-3 w-100">
                                <textarea
                                    className="text_area p-1 rounded w-100"
                                    placeholder="Enter a post..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default Post;