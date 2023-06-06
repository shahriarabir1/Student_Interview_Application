import React from "react";
import { useState } from "react";
import side from "./image/side.jpg";
import validation from "./LoginVlaid";
import { Link } from "react-router-dom";
import { axios } from "@bundled-es-modules/axios";

export const Login = () => {
  const [loginStatus, setLogin] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  return (
    <div className="App">
      <div className="auth-form-Container">
        <h1>Log in for Interview Exam</h1>
        <form className="login-form" action="" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              onChange={handleInput}
              type="email"
              placeholder="youremail@gmail.com"
              name="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Password
            <input
              onChange={handleInput}
              type="password"
              placeholder="******"
              name="password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
          <input className="button" type="submit" value="Login" />
        </form>
        <Link
          style={{ textDecoration: "none" }}
          to="/register"
          className="dont"
        >
          Dont't have an account? Register here
        </Link>
      </div>
      <img src={side} alt="side" />
    </div>
  );
};
