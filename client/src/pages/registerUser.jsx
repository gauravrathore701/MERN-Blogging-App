import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../config";
import { toast } from "react-toastify";

function RegisterUser() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const navigate = useNavigate();

  const register = async () => {
    const response = await axios.post(data.urlServer + "/user/register", {
      fullName,
      email,
      phoneNumber,
      password,
    });
    if (response.data.status === "success") {
      toast.success("Registered User!!!");
      navigate("/");
    } else {
      toast.error("Error!!!");
    }
  };

  return (
    <div>
      <h1 className="page-title">Register User</h1>

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

            <div className="label mt-2">Full Name</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />

            <div className="label mt-2">Phone Number</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <div className="label mt-2">
              Already have an Account? <Link to="/">Login Here</Link>
            </div>

            <div className="centered">
              <button
                className="btn btn-success mt-2 ps-5 pe-5"
                onClick={register}
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

export default RegisterUser;
