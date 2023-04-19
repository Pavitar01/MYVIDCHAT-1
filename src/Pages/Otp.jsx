import React from "react";

const Otp = () => {
  return (
    <div className="main">
      <div className="parent">
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.9z2xBL0u3KUDQqbJoUrMQAHaG2&pid=Api&P=0" />
        </div>
        <div>
          <h1>OTP verification</h1>
        </div>
        <div>
          <label>Phone No</label>
          <input type="text" />
          <button>Send OTP</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
