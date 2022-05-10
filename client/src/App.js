import "./App.css";
import React, { useContext, useState } from "react";
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
import Cart from "./pages/Cart/Cart";
import PreviewPage from "./components/HostedPaymentPage/PreviewPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    console.log("add ran");
const exist = cartItems.find(x => x.id === product.id);
if(exist){
  setCartItems(cartItems.map(x => x.id == product.id ? {...exist, qty: exist.qty + 1} : x));
}else{
  setCartItems([...cartItems, {...product, qty: 1}]);
}
  }
  const onRemove = (product) => {
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
        <Navbar cartCount={ 3 } />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/catalog" element={ <Catalog onAdd={onAdd} cartItems={cartItems} /> } />
          <Route path="/login" element={ <Login navigate={ navigate } /> } />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/payment" element={<PreviewPage/>} />
          <Route path="/signup" element={ <Signup navigate={ navigate } />} />
          <Route path="/product" element = {<ProductPage/>}/>
          <Route path="/cart" element={ <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />} />
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
