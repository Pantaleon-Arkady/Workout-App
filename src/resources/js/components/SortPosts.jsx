import { Dropdown } from "react-bootstrap";

function SortPosts({ onSort, screen }) {

    return (
        <Dropdown className={`
            ${screen === "desktop" ? "d-md-none d-block" : ""}
        `}>
            <Dropdown.Toggle variant="primary">
                Sort Posts
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onSort('personal')}>
                    Personal Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('all')}>
                    All Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('date_asc')}>
                    by Date ASC
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('date_desc')}>
                    by Date DESC
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortPosts;