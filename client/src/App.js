import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Account from "./components/Account/Account";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/Footer/Footer";
import "react-router";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Sign-Up";


function App() {
  const adminUser = {};

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
