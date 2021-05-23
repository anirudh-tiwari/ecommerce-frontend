import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";
// import Loadmore from "./loadmore";
import ImageSlider from "./imageslider";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";
import { Redirect } from "react-router-dom" 

const Product = () => {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  // const [popupVerifyState, setPopupVerifyState] = useState(false);
  // const token = localStorage.getItem("accessToken") 

  useEffect(() => {
    Api.getProduct().then((response) => {
      console.log(response)
      setProduct(response.data)
    });
  }, [])
  

  // if(loggedIn === false){
  //   return <Redirect to='/' />;
  // }
  

  return (
    <>
    {/* {token== null?setLoggedIn(false):null} */}
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
      {/* {popupVerifyState?<Popup color="success" message="OTP Verified" />:null}  */}
      </>     
  )
}

export default Product;

