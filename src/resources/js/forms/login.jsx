function LoginForm() {

    return (
        <form action="" className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">

            <h4 className="fw-bold">Log In</h4>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username or Email:</label>
                <input className="form-control" placeholder="Enter your username or email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Password:</label>
                <input className="form-control" placeholder="Enter your password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Log in
            </button>

        </form>
    );
}

export default LoginForm;