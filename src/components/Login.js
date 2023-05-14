import React from "react";
import "../Styles/Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    }); 
    console.log("User in changeHandler method ")
    console.log(user)
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("User in loginhandler method ")
    console.log(user)

    axios
      .post("http://localhost:8000/login", user)
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("Some error occured while loging data ");
        console.log(err);
      });
  };

  return (
    <>
      <div className="align">
        <label>Email : </label>
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={changeHandler}
        />
        <br />
        <button type="button" onClick={loginHandler}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
