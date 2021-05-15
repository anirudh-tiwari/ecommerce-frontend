import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";
// import Loadmore from "./loadmore";
import ImageSlider from "./imageslider";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Api.getProduct().then((response) => {
      console.log(response)
      setProduct(response.data)
    });
  }, [])

  return (
    <div>
      <ImageSlider />
      <div className="cardLayout">
        {product
          // .slice(0, this.state.value)
          .map((ProductRecord) => {
            return (
              <div >
                <Card product={ProductRecord} />
              </div>
            );
          })}
        {/* <Loadmore state={this.state} loadmore={this.loadmore} /> */}
      </div>
    </div>
  )
}

export default Product;

