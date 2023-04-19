import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "./main.css";

const Login = () => {
  return (
    <div className="btn-main">
      <div className="btn1">
        <div className="img">
          <img src="https://th.bing.com/th/id/OIP.c8b46OARsSRc49u3l_TZ0gHaE-?pid=ImgDet&rs=1" />
        </div>
        <div className="button">
          <button className="btn">
            <Link to="/Login">Log In</Link>
          </button>
          <button className="btn">
            <Link to="/Signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
