import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/index'
import { useHistory } from "react-router-dom";
import { increment } from '../redux';


const Card = (props) => {
  const dispatch = useDispatch()
  let history = useHistory();
  var cart = (id) => {
    dispatch(fetchProduct(id))
    // dispatch(increment())
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    history.push({
      pathname: '/cart',
    });
  }
  return (
    <>
      <div className=" card">
        <div className="card_image" style={{ backgroundImage: `url('${props.product.IMAGE}')` }}>
          {/* <img
            className="card_image_dimension"
            src={props.product.IMAGE}
            alt="Avatar"
          /> */}
        </div>
        <div className="card_detail ">
          <h6 className="card_detail_size ">
            <b>{props.product.NAME}</b>
          </h6>
          <h5 className="card_detail_size color">
            <b>{props.product.DESCRIPTION}</b>
          </h5>
          <h6 className=" card_detail_size">
            Original Price{" "}
            <b className="decoration ">
              {" "}
              {props.product.ORIGINAL_PRICE}
            </b>
          </h6>
          <h6 className="card_detail_size ">
            Discount Price {props.product.DISCOUNT_PRICE}
          </h6>
        </div>
        <div>
          <Link
            className="grey_button"
            to={{
              pathname: '/cardview',

              state: { productID: props.product.ID }
            }}>
            Viewss
            </Link>
          {/* <Link
            class="green_button position2"
            to={`/cardview/${props.product.name}`}
          >
            Add to Cart
            </Link> */}
          {/* <button class="green_button position2" onClick={cart}>Buy Clothes</button> */}
          <button class="btn btn-outline-success position2" onClick={() => cart(props.product.ID)}>Buy Clothes</button>
          {/* () => dispatch(increment()) */}
        </div>
      </div>
    </>
  );
}


export default Card;
