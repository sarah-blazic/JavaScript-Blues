import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
// Pages
import Account from "./pages/Account/Account";
import MainPage from "./pages/MainPage/MainPage";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Sign-Up";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const adminUser = {};
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // the props that were not destructured. 
  const RequireAuth = ({ children, redirectTo, ...rest }) => {
      return isAuth ? children : <Navigate to={ redirectTo } />;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <MainPage /> } />
          <Route path="/catalog" element={ <Catalog /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/account" 
            element={
              <RequireAuth redirectTo="/login">
                <Account />
              </RequireAuth>
            }
          />
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