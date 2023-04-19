import React from "react";
import "./Homepage.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
// import "./src/Auth/btn.css";

const Homepage = () => {
  const Navigate = useNavigate();
  const signout = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="main">
      <div className="Parent">
        <div className="upper">
          <img src="https://mystickermania.com/cdn/stickers/deadpool/sticker_2052-512x512.png?t=09102020" />
        </div>
        <div className="between">
          <h1>MyVidChat</h1>
          <p>Online video call, streaming and messaging Made easy</p>
          <a
            href="https://github.com/Pavitar01"
            style={{
              color: "gray",
              textDecoration: "none",
              color: "white",
              margin: "0 0 0 100px",
            }}
          >
            @Pavitar01
          </a>
        </div>
        <div className="bottom">
          <button
            style={{
              clipPath: "polygon(0% 0%, 85% 0, 100% 50%, 88% 100%, 0% 100%)",
            }}
          >
            <Link to="/home">Lets Go..</Link>
          </button>
          <button
            style={{
              width: "100px",
              color: "black",
              fontSize: "15px",
              boxShadow: "none",
              // outline: "red",
              border: "1px solid red",
              marginRight: "10px",
            }}
            role="button"
            onClick={signout}
            className="button-70"
          >
            {/* <FaGoogle /> */}
            &nbsp; Sign Out
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
