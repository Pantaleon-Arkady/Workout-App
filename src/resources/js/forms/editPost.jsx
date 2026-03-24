import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../axios";

function EditPost() {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setContent(res.data.content);
            })
    }, [id]);

    return (
        <>
            <div className="text-white">
                Editing Post {id}<br/>
                Title: {title}<br/>
                Content: {content}
            </div>
        </>
    )
}

export default EditPost;