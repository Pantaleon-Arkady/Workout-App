function GreetingsDiv({ username }) {

    if (!username) {
        return (
            <div className="greeting_div text-success bg-white rounded">
                <span className="greeting_element">
                    Welcome!
                </span>
            </div>
        )
    }

    return (
        <div className="greeting_div text-success bg-white rounded">
            <span className="greeting_element">
                Welcome back, {username}!
            </span>
        </div>
    )
}

export default GreetingsDiv;