import { Dropdown } from "react-bootstrap";

function SortPosts({ onSort, currentSort, screen }) {
    return (
        <Dropdown className={`
            ${screen === "desktop" ? "d-md-none d-block" : ""}
        `}>
            <Dropdown.Toggle variant="primary">
                Sort: {currentSort === "oldest" ? "Oldest" : "Latest"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSort("latest")}>
                    Latest Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort("oldest")}>
                    Oldest Posts
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SortPosts;