import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="page-title">Login page</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="label">Email</div>
            <input type="text" className="form-control" />

            <div className="label mt-2">Password</div>
            <input type="password" className="form-control" />

            <div className="centered">
              <button className="btn btn-success mt-3 ps-5 pe-5 me-3">
                Sign In
              </button>
              <button
                className="btn btn-warning mt-3 ps-5 pe-5 ms-3"
                onClick={() => {
                  navigate("/register");
                }}
              >
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

export default LoginPage;
