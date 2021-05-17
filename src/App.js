import React from "react";
import Login from "./cmp/login";
import Signin from "./cmp/signin";
import Product from "./cmp/product";
import CardView from "./cmp/CardView";
import Cart from "./cmp/cart";
import Checkout from "./cmp/checkout";
import Pagination from "./cmp/pagination";
import ProductSearch from "./cmp/ProductSearch";
import { Route, Switch } from 'react-router-dom';
import ImageSlider from "./cmp/imageslider";
import Card from "./cmp/card";
import User from "./cmp/User";
import Popup from "./cmp/Popup"
import Navbar from "./cmp/Navbar";
import About from "./cmp/About";
import OTP from "./cmp/otp";
import Verifyotp from "./cmp/Verifyotp";
import CartHover from "./cmp/cartHover";
import CartIcon from "./cmp/cartIcon";
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cardview" component={CardView} />
          <Route path="/product" component={Product} />
          <Route path="/productsearch" component={ProductSearch} />
          <Route path="/pagination" component={Pagination} />
          <Route path="/imageslider" component={ImageSlider} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/carthover" component={CartHover} />
          <Route path="/card" component={Card} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/carticon" component={CartIcon} />
          <Route path="/" component={OTP} exact />
          <Route path="/verify" component={Verifyotp} />
          <Route path="/popup" component={Popup} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
