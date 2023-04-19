// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle, FaKey, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

// src\firebase.js
const Signup = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [Cpass, setCpass] = useState("");
  const [hasAcc, setHasAcc] = useState(false);
  const [err, setErr] = useState("");

  const sign = (e) => {
    e.preventDefault();
    if (name === "" || Email === "" || Pass === "" || Cpass === "") {
      alert("Please enter all the fields");
    } else if (Cpass !== Pass) {
      alert("Passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, Email, Pass)
        .then(async (res) => {
          console.log(res);
          const user = res.user;
          await updateProfile(user, {
            displayName: name,
          });
          alert("Thanks For Becoming A  User");
          Navigate("/login");
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/user-exists":
              setErr(`User Already Exist`);
              break;
            case "auth/invalid-email":
              setErr(`Invalid Email`);

              break;
            case "auth/user-disabled":
              setErr(`Your Account Is Disabled`);

              break;
            case "auth/wrong-password":
              setErr(`Wrong Password`);

            // alert("User already exists");
          }
          // alert("error:" + );
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Registration Form</span>
          </div>
          <form onSubmit={sign}>
            <div className="row">
              <i className="fas fa-user">
                <FaUserAlt />
              </i>
              <input
                type="text"
                placeholder="Name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <i className="fas fa-user">
                <FaPhoneAlt />
              </i>
              <input
                type="text"
                placeholder="Email or Phone"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock">
                <FaKey />
              </i>
              <input
                type="password"
                placeholder="Create Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock">
                <FaKey />
              </i>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => {
                  setCpass(e.target.value);
                }}
              />
            </div>
            <p style={{ color: "red", fontSize: "14px" }}>{err}</p>
            <div className="row button">
              <input type="submit" value="Sign Up" />
            </div>

            <div className="signup-link">
              Already a member? <Link to="/Login">Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
