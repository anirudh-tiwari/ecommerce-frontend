import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import { Link } from "@reach/router";

const Cardview = (props) => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    Api.getViewProducts(props.location.state.product_name).then((response) => {
      setProduct(response.data)
    });
  }, [])
  return (
    <div className="container">
      <div className="row ">
        {product.map((ProductRecord) => {
          return (
            <>
              <div className="col-5 ">
                <div className="card_view_lefside">
                  <div className="card_view_image_dimension">
                    <img
                      className="card_view_image"
                      src={ProductRecord.IMAGE}
                      alt="Avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="col-7">
                <h5 className="card_view_detail_size">
                  <b>{ProductRecord.NAME}</b>
                </h5>

                <h6 className="color card_view_detail_size">
                  <b>{ProductRecord.DESCRIPTION}</b>
                </h6>

                <h6 className="card_view_detail_size">
                  <b>Tags :</b> Mens
                  </h6>
                <h6 className="card_view_detail_size">
                  {/* <b className="color">Original Price</b>{" "} */}
                    Original Price :{" "}
                  <b className="decoration ">
                    {" "}
                    {ProductRecord.ORIGINAL_PRICE}
                  </b>
                </h6>
                <h6 className="card_view_detail_size">
                  <b>Price :</b> {ProductRecord.DISCOUNT_PRICE}
                </h6>
                <br />
                <Link class="green_button" to={"/cart"}>
                  Add More
                  </Link>
                <Link class="green_button" to={"/cart"}>
                  Order
                  </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cardview;
