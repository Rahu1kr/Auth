import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { baselink } from "../link";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputvalue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputvalue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://auth-backend-9z6u.onrender.com/signup",
        {
          ...inputValue,
        },
        // { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputvalue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="card">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner">
        <div className="form_container">
          <h2>Signup Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Username</label>
              <input
                className="input"
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" id="btn">
              Signup
            </button>
            <span className="already">
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
