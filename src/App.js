import React from "react";
import Login from "./cmp/login";
import Signin from "./cmp/signin";
import Product from "./cmp/product";
import Cardview from "./cmp/card_view";
import Cart from "./cmp/cart";
import Carts from "./cmp/carts";
import Checkout from "./cmp/checkout";
import Navbar from "./cmp/navbar";
import Pagination from "./cmp/pagination";
import Search_card from "./cmp/search_card";
import { Router } from "@reach/router";
import ImageSlider from "./cmp/imageslider";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Login path="/login" />
          <Signin path="/signin" />
          <Checkout path="/checkout" />
          <Cardview path="/cardview/:productName" />
          <Product path="/product" />
          <Search_card path="/search_card/:searchProductName" />
          <Pagination path="/pagination" />
          <ImageSlider path="/imageslider" />
          <Carts path="/cart" />
        </Router>
      </div>
    );
  }
}

export default App;
