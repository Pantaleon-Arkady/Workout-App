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
                <Dropdown.Item onClick={() => onSort('all')}>
                    All Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('user')}>
                    Personal Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('latest')}>
                    Latest Posts
                </Dropdown.Item>

                <Dropdown.Item onClick={() => onSort('oldest')}>
                    Old Posts
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default SortPosts;