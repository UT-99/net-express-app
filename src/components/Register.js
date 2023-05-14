import React from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Register = () => {
  const [user , setUser] = useState({
    firstname:"",
    lastname: "",
    email: "",
    password : "",
    confirmPassword: ""
  })

  const changeHandler = (e) =>{
    const {name , value } = e.target;

    setUser({
      ...user , 
      [name] : value 
    })
    console.log("User", user)
  

  }

  return (
    <>
      <div className="align">
        <h2>New User Registration</h2>
        <label>FirstName : </label>
        <br />
        <input type="text" name="firstname"value ={user.firstname} onChange={changeHandler} />
        <br />
        <br />
        <label>LastName : </label>
        <br />
        <input type="text" name="lastname" value ={user.lastname} onChange={changeHandler}/>
        <br />
        <br />
        <label>Email : </label>
        <br />
        <input type="text" name="email"value ={user.email} onChange={changeHandler} />
        <br />
        <br />
        <label>Password : </label>
        <br />
        <input type="password" name="password"value ={user.password} onChange={changeHandler} />
        <br />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input type="password" name="confirmPassword" value ={user.confirmPassword}onChange={changeHandler} />

        <br />
        <br />

        <button type="submit">Submit</button>
        <Link to='/login'><button type="button">Login</button></Link>

      </div>
    </>
  );
};

export default Register;
