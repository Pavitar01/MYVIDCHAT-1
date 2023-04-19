import { Routes, Route } from "react-router-dom";
import Log from "./Auth/Log";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
// import LoginButton from "./Auth/Login";
import Home from "./Pages/Home";
import Homepage from "./Pages/Homepage";
import Meet from "./Pages/Meet";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Log />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/main" element={<Homepage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/meet/:roomId" element={<Meet />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
