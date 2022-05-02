import "./App.css";
import React, { useContext } from "react";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import MainPage from "./components/MainPage/MainPage";
import Account from "./components/Account/Account";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/Search-Bar";
import product_card from "./components/catalog/product_data";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";

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

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <SearchBar placeholder="Enter a Frogs Name..." data={product_card}/>
        <Routes>
          <Route exact path="/" element={ <MainPage /> } />
          <Route path="/catalog" element={ <Catalog /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/product" element = {<ProductPage/>}/>
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
    </BrowserRouter>
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
