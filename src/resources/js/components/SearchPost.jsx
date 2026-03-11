import { useState } from "react";


function SearchPost({ search }) {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="mb-3 d-flex flex-row">
            <input
                type="text"
                placeholder="Search posts..."
                className="form-control"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <button
                className="btn btn-primary ms-2"
                onClick={() => search(searchValue)}
            >
                Search
            </button>
        </div>
    )
}

export default SearchPost;