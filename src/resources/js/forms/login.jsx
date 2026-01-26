function LoginForm() {

    return (
        <form action="" className="border mt-3 p-3 w-80 rounded bg-white text-black d-flex flex-column align-items-center px-3 w-100 w-md-50">

            <div className="fs-5 fw-bold">Log In</div>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label className="text-xs">Username or Email:</label>
                <input className="form-control text-xs" placeholder="Enter your username or email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label className="text-xs">Password:</label>
                <input className="form-control text-xs" placeholder="Enter your password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Log in
            </button>

        </form>
    );
}

export default LoginForm;