import "./App.css";
<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import Account from "./components/Account/Account";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/Footer/Footer";
import "react-router";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
=======
import React, { useContext } from "react";
import "react-router"; // ?
import { BrowserRouter, Route, Link, Routes, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Button from "./components/Button.js";
import Navbar from "./components/Navbar/Navbar";
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/Sign-Up";
import Catalog from "./components/catalog/Catalog";


function App() {
  const adminUser = {};
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // the props that were not destructured. 
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
=======
          <Route exact path="/login" render={ props => <Login {...props } />} />
          <Route exact path="/signup" render={ props => <SignUp {...props } />} />
          <PrivateRoute exact path="/dashboard" component={ Catalog } />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};