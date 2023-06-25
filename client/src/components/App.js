import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { Route, Routes } from "react-router-dom";
import About from "./About.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Leaderboard from "./Leaderboard.js";
import Start from "./Start.js"

function App() {

  const [user, setUser] = useState(null)
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact="true" element={<Start />} />
        <Route path="/home" exact="true" element={<Home/>} />
        <Route path="/about" exact="true" element={<About />} />
        <Route path="/signup" exact="true" element={<Signup onLogin = {setUser}/>} />
        <Route path="/login" exact="true" element={<Login />} />
        <Route path="/leaderboard" exact="true" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
