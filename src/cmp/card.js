import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../redux/index'
import { useHistory } from "react-router-dom";
import { addQuantity } from '../redux';

const Card = (props) => {
  const userData = useSelector(state => state.product.product)
  const dispatch = useDispatch()
  let history = useHistory();
  var cart = (id) => {
    {
      userData.some(product => product.productId === id) ?
        dispatch(addQuantity(id)) : dispatch(fetchProduct(id))
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    history.push({
      pathname: '/carthover',
    });
  }
  return (
    <>
      <div className=" card">
        <div className="card_image" style={{ backgroundImage: `url('${props.product.IMAGE}')` }}>
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
          <button class="btn btn-outline-success position2" onClick={() => cart(props.product.ID)}>Buy Clothes</button>
        </div>
      </div>
    </>
  );
}


export default Card;
