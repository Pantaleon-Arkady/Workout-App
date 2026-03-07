import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";
import { Dropdown } from 'react-bootstrap';

function Post() {
    const [postForm, setPostForm] = useState(false);
    const postFormDiv = useRef(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const closeForm = () => setPostForm(false);

    function validateForm() {
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = "Title is required!"
        }

        if (!content.trim()) {
            newErrors.content = "At least a phrase is required..."
        }

        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        try {
            await axios.get("/sanctum/csrf-cookie");

            await axios.post("/create-post", {
                title,
                content
            });

            setTitle("");
            setContent("");
            closeForm();

            window.location.reload();

        } catch (error) {
            console.error(error.response?.data);
            alert("Failed to post");
        }
    }

    return (
        <>

            <Dropdown className="d-block d-md-none">
                <Dropdown.Toggle variant="primary">
                    Sort Posts
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Personal Posts</Dropdown.Item>
                    <Dropdown.Item href="#">All Posts</Dropdown.Item>
                    <Dropdown.Item href="#">by Date ASC</Dropdown.Item>
                    <Dropdown.Item href="#">by Date DESC</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
                        <form
                            onSubmit={handleSubmit}
                            className="w-75 bg-white rounded text-black d-flex flex-column align-items-center p-3"
                        >
                            Create a Post?
                            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded pt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Title..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                {errors.title && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.title}</div>}
                            </div>
                            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded pt-3 w-100">
                                <textarea
                                    className="text_area p-1 rounded w-100"
                                    placeholder="Enter a post..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                                {errors.content && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.content}</div>}
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