import React from "react";
import { useState } from "react";
import { CountryCode } from "./CountryCode";
import { Country } from "./Country";
import side from "./image/side.jpg";
import validation from "./EmailValid";
import { axios } from "@bundled-es-modules/axios";
import { Link } from "react-router-dom";

export const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    countrycode: "",
    phone: "",
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    Address: "",
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
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <div className="authoo-form-Container">
        <h1>Give proper information for authentication</h1>
        <form className="registration-form" action="" onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              onChange={handleInput}
              type="text"
              placeholder="First Name"
              name="firstName"
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </label>
          <label>
            Last Name
            <input
              onChange={handleInput}
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </label>
          <label>
            username
            <input
              onChange={handleInput}
              type="text"
              placeholder="username"
              name="username"
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </label>
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
          <label>
            Phone No.
            <select className="CC" name="countrycode" onChange={handleInput}>
              <CountryCode />
            </select>
            <input
              onChange={handleInput}
              type="tel"
              placeholder="Phone No."
              name="phone"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <label>
            Country
            <select className="C" name="country" onChange={handleInput}>
              <Country />
            </select>
          </label>
          <label>
            Address
            <input
              onChange={handleInput}
              type="text"
              placeholder=""
              name="Address"
            />
          </label>
          <input type="submit" className="button" value={"Create an account"} />
        </form>
        <Link to={"/"} style={{ textDecoration: "none" }} className="dont">
          Already have an account? Log In
        </Link>
      </div>
      <img src={side} alt="side" />
    </div>
  );
};
