import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "@reach/router";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className=" card">
          <div className="card_image">
            <img
              className="card_image_dimension"
              src={this.props.product.image}
              alt="Avatar"
            />
          </div>
          <div className="card_detail ">
            <h6 className="card_detail_size ">
              <b>{this.props.product.name}</b>
            </h6>
            <h5 className="card_detail_size color">
              <b>{this.props.product.description}</b>
            </h5>
            <h6 className=" card_detail_size">
              Original Price{" "}
              <b className="decoration ">
                {" "}
                {this.props.product.original_price}
              </b>
            </h6>
            <h6 className="card_detail_size ">
              Price {this.props.product.discount_price}
            </h6>
          </div>
          <div>
            <Link
              class="grey_button"
              to={`/cardview/${this.props.product.name}`}
            >
              View
            </Link>
            <Link
              class="green_button position2"
              to={`/cardview/${this.props.product.name}`}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
