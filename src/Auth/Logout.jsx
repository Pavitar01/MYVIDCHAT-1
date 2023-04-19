import React from "react";
import fire from "../firebase";
const Logout = () => {
  const logout = () => {
    fire.auth().signOut();
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
