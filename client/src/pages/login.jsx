import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../config";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axios.post(data.urlServer + "/user/login", {
      email,
      password,
    });
    const result = response.data;
    if (result.status === "success") {
      toast.success("Logged IN");
      navigate("/menuboard");
      // storing token in local storage
      localStorage.setItem("token", JSON.stringify(result.data.token));
    } else {
      toast.error("There's an Error!!!");
    }
  };

  return (
    <div>
      <h1 className="page-title">Login page</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="label">Email</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="label mt-2">Password</div>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="centered">
              <button
                className="btn btn-success mt-3 ps-5 pe-5 me-3"
                onClick={login}
              >
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
