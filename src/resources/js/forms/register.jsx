function RegisterForm() {

    return (
        <form action="" className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">

            <h4 className="fw-bold">Register</h4>

            <div className="border mb-2 mt-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Username:</label>
                <input className="form-control" placeholder="Create a username..." />
            </div>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Email:</label>
                <input className="form-control" placeholder="Enter your email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label>Password:</label>
                <input className="form-control" placeholder="Create a password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Register
            </button>

        </form>
    );
}

export default RegisterForm;