import "./App.css";
import React, { useContext, useEffect, useState } from "react";
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
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./pages/Cart/Cart";

import PreviewPage from "./components/HostedPaymentPage/PreviewPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQty, setCartQty] = useState(0);

  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  console.log("App auth: ", isAuth);
  const RequireAuth = ({ children, redirectTo, ...rest }) => {
    return isAuth ? children : <Navigate to={redirectTo} />;
  };

  const onAdd = (product) => {
    console.log("add ran");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id == product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    console.log("on remove ran");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    let count = 0;
    cartItems.forEach((el) => {
      count += el.qty;
    });
    setCartQty(count);
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar cartCount={cartQty} />
      <Routes>
        <Route exact path="/" element={<Home onAdd={onAdd} />} />
        <Route path="/catalog" element={<Catalog onAdd={onAdd} />} />
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<PreviewPage />} />
        <Route path="/signup" element={<Signup navigate={navigate} />} />
        <Route path="/product/:id" element={<ProductPage onAdd={onAdd}/>} />
        <Route
          path="/cart"
          element={<Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>}
        />
        <Route
          path="/account"
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
