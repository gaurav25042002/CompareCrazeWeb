import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx";
import MainPage from "./Pages/MainPage.jsx";

function App() {
  return (
      <div className="main-app">
        <Router>
          <Routes>
            <Route exact path="/mainpage" element={<MainPage />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
