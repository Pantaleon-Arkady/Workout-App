import Headers from "../components/Header";

function Posts() {

    return (
        <div className="d-flex flex-column text-white vh-100">
            <Headers
                rightFeature={true}
                page="post"
            />
            Posts page
        </div>
    )
}

export default Posts;