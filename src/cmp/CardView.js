import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import { Link } from "@reach/router";

function CardView(props) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        Api.getViewProducts(props.location.state.productID).then((response) => {
            setProduct(response.data)
        });
    }, [])
    return (
        <div className="cardViewLayout">
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
