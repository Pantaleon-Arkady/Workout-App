import { Dropdown } from "react-bootstrap";

function FilterPosts({ onFilter, currentFilter, screen }) {
    return (
        <Dropdown className={`
            ${screen === "desktop" ? "d-md-none d-block" : ""}
        `}>
            <Dropdown.Toggle variant="secondary">
                Filter: {currentFilter === "user" ? "Personal" : "All"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onFilter("all")}>
                    All Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onFilter("user")}>
                    Personal Posts
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterPosts;