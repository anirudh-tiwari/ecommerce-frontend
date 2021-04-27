import React from "react";
import Login from "./cmp/login";
import Signin from "./cmp/signin";
import Product from "./cmp/product";
import Cardview from "./cmp/card_view";
import Cart from "./cmp/cart";
import Checkout from "./cmp/checkout";
import Navbars from "./cmp/navbars";
import Pagination from "./cmp/pagination";
import ProductSearch from "./cmp/ProductSearch";
import { Route, Switch } from 'react-router-dom';
import ImageSlider from "./cmp/imageslider";
import User from "./cmp/User";
import About from "./cmp/About";
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Navbars />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Signin} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cardview" component={Cardview} />
          <Route path="/product" component={Product} />
          <Route path="/productsearch" component={ProductSearch} />
          <Route path="/pagination" component={Pagination} />
          <Route path="/imageslider" component={ImageSlider} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
