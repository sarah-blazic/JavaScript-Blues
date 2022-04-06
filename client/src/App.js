import "./App.css";
import React from "react";
import "react-router"; // ?
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Button from "./components/Button.js";
import Navbar from "./components/Navbar/Navbar";
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
          <Route exact path="/login" render={ props => <Login {...props } />} />
          <Route exact path="/signup" render={ props => <Signup {...props } />} />
          <PrivateRoute exact path="/dashboard" component={ Members } />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
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