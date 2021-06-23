import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./route/protected";
import { Route, Switch } from "react-router-dom";
import Product from "./cmp/product";
import CardView from "./cmp/CardView";
import Cart from "./cmp/cart";
import Checkout from "./cmp/checkout";
import ProductSearch from "./cmp/ProductSearch";
import ImageSlider from "./cmp/imageslider";
import Card from "./cmp/card";
import Verifyotp from "./cmp/Verifyotp";
import OTP from "./cmp/otp";
import Popup from "./cmp/Popup";
import About from "./cmp/About";
import CartHover from "./cmp/cartHover";
import CartIcon from "./cmp/cartIcon";
import { Redirect } from "react-router-dom";

const App = () => {
  var token = localStorage.getItem("accessToken");

  return (
    <>
      <Provider store={store}>
        <Route path="/" exact>
          <OTP />
        </Route>
        <Route path="/verify">
          <Verifyotp />
        </Route>
        <Route path="/product">
          <ProtectedRoute cmp={Product} />
        </Route>
        <Route path="/checkout">
          <ProtectedRoute cmp={Checkout} />
        </Route>
        <Route path="/cardview">
          <ProtectedRoute cmp={CardView} />
        </Route>
        <Route path="/productsearch">
          <ProtectedRoute cmp={ProductSearch} />
        </Route>
        <Route path="/imageslider">
          <ProtectedRoute cmp={ImageSlider} />
        </Route>
        <Route path="/cart">
          <ProtectedRoute cmp={Cart} />
        </Route>
        <Route path="/about">
          <ProtectedRoute cmp={About} />
        </Route>
        <Route path="/carthover">
          <ProtectedRoute cmp={CartHover} />
        </Route>
        <Route path="/card">
          <ProtectedRoute cmp={Card} />
        </Route>
        <Route path="/carticon">
          <ProtectedRoute cmp={CartIcon} />
        </Route>
        <Route path="/popup">
          <ProtectedRoute cmp={Popup} />
        </Route>
        {token ? <Redirect to="/product" /> : <Redirect to="/" />}
      </Provider>
    </>
  );
};

export default App;

{
  /* {isLoggedIn?                                                                      
    <Route path="/" component={ProtectedRoute} /> 
 :
 <Route path="/" component={UnprotectedRoute} />
} */
}
