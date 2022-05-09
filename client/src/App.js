import "./App.css";
import React, { useContext } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
// Pages
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import product_card from "./pages/Catalog/product_data";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import PreviewPage from "./components/HostedPaymentPage/PreviewPage";

function App() {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);

  // here we are ceating a private route wrapper to prevent front end routing to
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing
  // props, but using object destucturing.  the ...rest is literally the rest of
  // the props that were not destructured.
  const RequireAuth = ({ children, redirectTo, ...rest }) => {
    return isAuth ? children : <Navigate to={redirectTo} />;
  };

  /* Put this in place of the normal account Route
    <Route path="/account" 
            element={
              <RequireAuth redirectTo="/login">
                <Account />
              </RequireAuth>
            }
          />
  */
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/catalog" element={ <Catalog/> } />
          <Route path="/login" element={ <Login navigate={ navigate } /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/payment" element={<PreviewPage/>} />
          <Route path="/signup" element={ <Signup navigate={ navigate } />} />
          <Route path="/product/:id" element = {<ProductPage/>}/>
          <Route path="/cart" element={ <Cart />} />
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
  );
}

function Main() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Main;
