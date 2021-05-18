import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import { Link } from "@reach/router";
import { Redirect} from "react-router-dom";

function CardView(props) {
    const [product, setProduct] = useState([]);
    const [loggedIn, setLoggedIn] = useState(true);
    const token = localStorage.getItem("accessToken") 

    useEffect(() => {
        Api.getViewProducts(props?.location?.state?.productID).then((response) => {
            setProduct(response.data)
        });
    }, [])

    if(loggedIn === false){
        return <Redirect to='/' />;
      }

    return (
        <div className="cardViewLayout">
        {token== null?setLoggedIn(false):null}
            <div className="card_view_lefside">
                <div className="card_view_image_dimension">
                    <img
                        className="card_view_image"
                        src={product.IMAGE}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className="cardViewDetail">
                <h5 className="card_view_detail_size">
                    <b>{product.NAME}</b>
                </h5>

                <h6 className="color card_view_detail_size">
                    <b>{product.DESCRIPTION}</b>
                </h6>

                <h6 className="card_view_detail_size">
                    <b>Tags :</b> {product.tags && product.tags.join(", ")}
                    {/* {product.tags?.join(", ")} */}
                </h6>
                <h6 className="card_view_detail_size">
                    Original Price :{" "}
                    <b className="decoration ">
                        {" "}
                        {product.ORIGINAL_PRICE}
                    </b>
                </h6>
                <h6 className="card_view_detail_size">
                    <b>Price :</b> {product.DISCOUNT_PRICE}
                </h6>
                <br />
                <Link class="green_button" to={"/cart"}>
                    Add More
                  </Link>
                <Link class="green_button" to={"/cart"}>
                    Order
          </Link>
            </div>
        </div>
    )
}

export default CardView
