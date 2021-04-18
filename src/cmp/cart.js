import React from "react";
import "../App.css";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "@reach/router";
import { decrement, increment, addQuantity, subtractQuantity } from '../redux';

const Cart = () => {
  const userData = useSelector(state => state.product.product)
  console.log("zzzzzzzzz", userData)
  const dispatch = useDispatch()
  // const userData = useSelector(state => state.users)
  console.log("qqqqqqq", userData)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 ">
          <div className="ani ">
            <div className="row">
              {userData.map((ProductRecord) => {
                var SUM = 0
                return (
                  <>
                    <div className="col-sm-3 ">
                      <img
                        className="cart_card_image"
                        src={ProductRecord.product.IMAGE}
                        alt="Avatar"
                      />
                    </div>
                    <div className="col-sm-3 ">
                      <div>
                        <h3>{ProductRecord.product.NAME}</h3>
                        <h3>{ProductRecord.product.DISCOUNT_PRICE}</h3>
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      <div className="">
                        <h3>Qty. </h3>
                        <h3>{ProductRecord.quantity}</h3>
                      </div>
                    </div>
                    <div className="col-sm-3 ">
                      {/* <div className=""> */}
                      <h3 className="font_increase">
                        {/* <button onClick={() => dispatch(increment())}>+</button> */}
                        <button onClick={() => dispatch(addQuantity(ProductRecord.product.ID))}>+</button>
                        {/* <b className="space_font">+</b> */}
                        <button onClick={() => dispatch(subtractQuantity(ProductRecord.product.ID))}>-</button>
                        {/* <b>-</b> */}
                      </h3>
                      {/* </div> */}
                    </div>
                  </>
                )
              }
              )}
            </div>
          </div>
        </div>

        <div className="col-sm-3  ">
          <div className="cart_right_container">
            <h2>Total Items</h2>

            <h2>
              <span className="color">{userData.length}</span>
            </h2>
            <h2>Total Payments</h2>
            <h2>
              {userData.reduce(function (sum, current) {
                return sum + current.product.DISCOUNT_PRICE;
              }, 0)}
            </h2>
            <br />
            <h1 className="linebetween"></h1>
            <br />
            <Link class="grey_button" to={"/"}>
              CHECKOUT
              </Link>
            <Link class="red_button position2" to={"/"}>
              CLEAR
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cart;

// {/* <div className="col-sm-8 ani">
//             <div className="cart_card">
//               <img
//                 className="cart_card_image"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr3ufbveAtb-YupDZuDSI_dh3mDLt_wUNNA&usqp=CAU"
//                 alt="Avatar"
//               />
//               <div className="cart_card_detail">
//                 <h6>Denim jacket</h6>
//                 <h6>9999</h6>
//               </div>
//               <div className="cart_card_quantity">
//                 <h6>Qty. 1</h6>
//               </div>
//               {/* cart_card_add_subtract */}
//               <div className="cart_card_add_subtract">
//                 <h6 className="font_increase">
//                   <b className="space_font">+</b>
//                   <b>-</b>
//                 </h6>
//               </div>
//             </div>
//             <div className="cart_card">
//               <img
//                 className="cart_card_image"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr3ufbveAtb-YupDZuDSI_dh3mDLt_wUNNA&usqp=CAU"
//                 alt="Avatar"
//               />
//               <div className="cart_card_detail">
//                 <h6>Denim jacket</h6>
//                 <h6>9999</h6>
//               </div>
//               <div className="cart_card_quantity">
//                 <h6>Qty. 1</h6>
//               </div>
//               {/* cart_card_add_subtract */}
//               <div className="cart_card_add_subtract">
//                 <h6 className="font_increase">
//                   <b className="space_font">+</b>
//                   <b>-</b>
//                 </h6>
//               </div>
//             </div>
//             <div className="cart_card">
//               <img
//                 className="cart_card_image"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhr3ufbveAtb-YupDZuDSI_dh3mDLt_wUNNA&usqp=CAU"
//                 alt="Avatar"
//               />
//               <div className="cart_card_detail">
//                 <h6>Denim jacket</h6>
//                 <h6>9999</h6>
//               </div>
//               <div className="cart_card_quantity">
//                 <h6>Qty. 1</h6>
//               </div>
//               {/* cart_card_add_subtract */}
//               <div className="cart_card_add_subtract">
//                 <h6 className="font_increase">
//                   <b className="space_font">+</b>
//                   <b>-</b>
//                 </h6>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-3">
//             <div className="avi">
//               <b>Total Items</b>
//               <p>
//                 <b>8</b>
//               </p>
//               <h6>
//                 <b>Total Payments</b>
//               </h6>
//               <p>
//                 <b>5900.00</b>
//               </p>
//               <h1 className="linebetween"></h1>
//               <div className="button_space">
//                 <button type="button" class="btn btn-secondary">
//                   CHECKOUT
//                 </button>
//                 <button type="button" class="btn btn-outline-danger">
//                   CLEAR
//                 </button>
//               </div>
//             </div>
//           </div> */}
