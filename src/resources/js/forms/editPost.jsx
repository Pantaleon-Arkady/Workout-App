import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
 
    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
            })
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`/api/posts/${id}`, {
            title,
            content
        });

        navigate(`/post${location.search}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    );
}

export default EditPost;