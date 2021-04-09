import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import { Link } from "@reach/router";

class Cardview extends React.Component {
  constructor() {
    super();
    this.state = { product: [] };
  }
  componentDidMount() {
    Api.getViewProducts(this.props.productName).then((response) => {
      // console.log(response.data);
      this.setState({ product: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row ">
          {this.state.product.map((ProductRecord) => {
            return (
              <>
                <div className="col-5 ">
                  <div className="card_view_lefside">
                    <div className="card_view_image_dimension">
                      <img
                        className="card_view_image"
                        src={ProductRecord.image}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-7">
                  <h5 className="card_view_detail_size">
                    <b>{ProductRecord.name}</b>
                  </h5>

                  <h6 className="color card_view_detail_size">
                    <b>{ProductRecord.description}</b>
                  </h6>

                  <h6 className="card_view_detail_size">
                    <b>Tags :</b> Mens
                  </h6>
                  <h6 className="card_view_detail_size">
                    {/* <b className="color">Original Price</b>{" "} */}
                    Original Price :{" "}
                    <b className="decoration ">
                      {" "}
                      {ProductRecord.original_price}
                    </b>
                  </h6>
                  <h6 className="card_view_detail_size">
                    <b>Price :</b> {ProductRecord.discount_price}
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
}

export default Cardview;
