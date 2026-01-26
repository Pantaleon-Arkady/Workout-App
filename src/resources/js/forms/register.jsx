function RegisterForm() {

    return (
        <form action="" className="border mt-3 p-3 w-80 rounded bg-white text-black d-flex flex-column align-items-center">

            <div className="fs-5 fw-bold">Register</div>

            <div className="border mb-2 mt-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label className="text-xs">Username:</label>
                <input className="form-control text-xs" placeholder="Create a username..." />
            </div>

            <div className="border mb-2 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label className="text-xs">Email:</label>
                <input className="form-control text-xs" placeholder="Enter your email..." />
            </div>

            <div className="border mb-3 pt-1 pb-3 px-3 bg-secondary text-white rounded">
                <label className="text-xs">Password:</label>
                <input className="form-control text-xs" placeholder="Create a password..." />
            </div>

            <button className="btn btn-outline-dark btn-fs w-50">
                Register
            </button>

        </form>
    );
}

export default RegisterForm;