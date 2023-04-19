import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

import React, { useEffect, useState } from "react";
import { FaGoogle, FaKey, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { app, auth } from "../firebase";

import "./btn.css";

const Log = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [err, setErr] = useState("");
  // const [user, setUser] = useState("");

  const [User, setUser] = useState("");
  const Navigate = useNavigate();
  const googleprovider = new GoogleAuthProvider();
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const google = () => {
    // setErr("Google Auth Is Not Working....");
    signInWithPopup(auth, googleprovider).then((res) => {
      console.log(res);
    });
  };

  const forgot = async () => {
    if (Email) {
      await sendPasswordResetEmail(Email)
        .then(() => {
          alert("Please Check Your Inbox" + ` ${Email}`);
        })
        .catch((err) => {
          alert("Something went wrong." + `${err}`);
        });
      // console;
    } else {
      alert("Something went wrong.");
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (User) => {
      if (User) {
        Navigate("/main");
      }
    });
  }, []);

  const log = (e) => {
    e.preventDefault();
    if (Pass === "" || Email === "") {
      alert("Please Fill The Feilds");
    } else {
      signInWithEmailAndPassword(auth, Email, Pass)
        .then((res) => {
          console.log(res);
          alert("Logging You In");
          Navigate("/main");
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
              setErr(`Invalid Email`);

              break;
            case "auth/user-disabled":
              setErr(`Your Account Is Disabled`);

              break;
            case "auth/wrong-password":
              setErr(`Wrong Password`);
              break;

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
            <span>Login Form</span>
          </div>
          <form onSubmit={log}>
            <div className="row">
              <i className="fas fa-user">
                <FaUserAlt />
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
                placeholder="Password"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="pass">
              <Link to="" onClick={forgot}>
                Forgot password?
              </Link>
            </div>
            <p style={{ color: "red", fontSize: "14px" }}>{err}</p>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="row button">
              <button className="button-80" role="button" onClick={google}>
                <FaGoogle />
                &nbsp; SignIn With Google
              </button>
            </div>
            <div className="signup-link">
              Not a member? <Link to="/Signup">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Log;
