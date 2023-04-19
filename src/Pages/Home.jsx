import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main1.css";
import { FaKey, FaKeycdn, IconName } from "react-icons/fa";
// import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { auth } from "../firebase";

const Home = () => {
  const [num, setNum] = useState(1234);
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
      } else {
        setUser("");
      }
    });
  });

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const gen = () => {
    navigator.clipboard.writeText(num);
    alert("Text copied");
    setNum(randomNumberInRange(6000, 9000));
  };

  const Navigate = useNavigate();
  const [val, setVal] = useState("");

  const funJoin = useCallback(() => {
    if (val === "") {
      alert("please Enter The Above key");
    } else {
      Navigate(`/meet/${val}`);
    }
    // console.log(`/meet/${val}`);
  }, [Navigate, val]);

  return (
    <div className="Main">
      <div className="Main-1">
        <div className="nav">
          <h1>MyVidChat</h1>
        </div>
        <div className="Hi">
          <img src="https://th.bing.com/th/id/R.efc287d2d2aef6efdfe02a78936ec4af?rik=NpJ4OsjvT%2bRACA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fkT8%2fzXy%2fkT8zXyaTr.png&ehk=cDWeruHYfHXch1dT2yGER5omrRb5SKzGuR7Cmr8%2fFCo%3d&risl=&pid=ImgRaw&r=0" />
          <h1 style={{ fontSize: "35px", textTransform: "capitalize" }}>
            Hi!
            <br />
            <span style={{ fontSize: "30px", textTransform: "capitalize" }}>
              {user}
            </span>
          </h1>

          {/* <h1 style={{text-transf}}></h1> */}
        </div>
        <div className="parent">
          {/* // <button
          //   data-toggle="popover"
          //   title="copied"
          //   data-content="This is your RoomId"
          //   onClick={gen}
          //   style={{
          //     background: "gray",
          //     margin: "0 0 50px 0",
          //     borderRadius: "10px",
          //   }}
          // >
          //   {num}&nbsp;&nbsp;&nbsp;
          //   <FaKey />
          // </button> */}
          <div>
            <input
              type="text"
              placeholder="Enter Your Room Code"
              // value=""
              onChange={(e) => setVal(e.target.value)}
            />
            <button onClick={funJoin}>Enter</button>
          </div>
          <span style={{ color: "white", margin: "50px 0 0 0" }}>
            This App is created By:&nbsp; &nbsp;
            <a
              href="https://github.com/Pavitar01"
              style={{ textDecoration: "none", color: "white" }}
            >
              @Pavitar01
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
