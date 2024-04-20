import { Link } from "react-router-dom";

function RegisterUser() {
  return (
    <div>
      <h1 className="page-title">Register User</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="label">Email</div>
            <input type="text" className="form-control" />

            <div className="label mt-2">Password</div>
            <input type="password" className="form-control" />

            <div className="label mt-2">Full Name</div>
            <input type="text" className="form-control" />

            <div className="label mt-2">Phone Number</div>
            <input type="text" className="form-control" />

            <div className="label mt-2">
              Already have an Account? <Link to="/">Login Here</Link>
            </div>

            <div className="centered">
              <button className="btn btn-success mt-2 ps-5 pe-5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default RegisterUser;
