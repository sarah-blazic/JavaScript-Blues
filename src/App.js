import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/catalog/Catalog";
import "react-router";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Button from "./components/Button.js";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Sign-Up";

function App() {
  const adminUser = {};

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;