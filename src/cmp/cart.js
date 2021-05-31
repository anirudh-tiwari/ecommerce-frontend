import React , {useEffect} from "react";
import "../App.css";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "@reach/router";
import { fetchProduct } from '../redux/index'
import { addQuantity, subtractQuantity, removeFromCart, emptyCart } from '../redux';
import Api from "../Api";
import { useHistory } from "react-router-dom";


const Cart = () => {
  // useEffect(() => {
  //   dispatch(fetchProduct())
  // }, [])

  const dispatch = useDispatch()
  let history = useHistory();
  const userData = useSelector(state => state.product.product)
  console.log("zzzzzzzzz", userData)
  console.log("length of array", userData.length)


  var quantityAdd = (id) => {
    userData.forEach(products =>{
      if(products.ID === id){
        dispatch(addQuantity(id))
      let data={
          QUANTITY: products.QUANTITY + 1,
          PRODUCT_ID:id
        } 
        Api.postQuantity(data).then((response) => {
          const product = response.data 
        }) 
}
  })
  }
  var quantitySubtract = (id) => {
    userData.forEach(products =>{
      if(products.ID === id){
      let data={
          QUANTITY: products.QUANTITY !== 1 ? products.QUANTITY - 1 : 1,
          // DISCOUNT_PRICE: products.DISCOUNT_PRICE !== products.actualPrice ?  (products.QUANTITY - 1) * products.actualPrice : products.actualPrice, 
          PRODUCT_ID:id
        } 
     Api.postQuantity(data).then((response) => {
        dispatch(subtractQuantity(id))
        // history.push('/cart');
  }) 
}
    }
  )
  }

  var
  quantityDelete = (id) => {
    const data = {
      PRODUCT_ID:id
  }
  Api.deleteProduct(data).then((response) => {
      const product = response.data 
      dispatch(removeFromCart(id))
    })
  }
  var
  cleardata = () => {
  Api.deleteAll().then((response) => {
      const product = response.data 
      dispatch(emptyCart())
    })
  }

  
  return (
    <div >
      {userData.length === 0 ? <div className="cartEmptyText cart">
        <span><i class="fa fa-shopping-cart cartEmptyTextIcon"></i></span><br /><br />
        <h3>Did you leave something in your cart? Sign in to check.</h3><br />
        <button className="cartHoverCheckout">Sign In</button> <br /><br />

        <Link to={"/"} className="cartHoverGoShopping">
          Go Shopping
        </Link>
      </div>
        :
        <div className="cartData">
          <div className="ani ">
            {userData.map((ProductRecord) => {
              return (
                <>
                  <div >
                    <img
                      className="cart_card_image"
                      src={ProductRecord.IMAGE}
                      alt="Avatar"
                    />
                  </div>
                  <div >
                    <div>
                      <h3 className="cartProductName">{ProductRecord.NAME}</h3>
                      <h3 className="cartProductName">{ProductRecord.DISCOUNT_PRICE}</h3>
                    </div>
                  </div>
                  <div >
                    <div >
                      <h3 className="cartProductName">Qty. </h3>
                      <h3 className="cartProductName">{ProductRecord.QUANTITY}</h3>
                    </div>
                  </div>
                  <div >
                    {/* <div className=""> */}
                    <h3 className="font_increase">
                      <Link to={"/"} onClick={() => quantityAdd(ProductRecord.ID)}>
                        <span><i class="fa fa-plus cartIcon"></i></span>
                      </Link>
                      <Link to={"/"} onClick={() => quantitySubtract(ProductRecord.ID)}>
                        <span><i class="fa fa-minus cartIcon"></i></span>
                      </Link>
                    </h3>
                  </div>
                  <div>
                    <Link to={"/"} onClick={() => quantityDelete(ProductRecord.ID)}>
                      <span><i class="fa fa-trash cartIconDelete"></i></span>
                    </Link>
                    {/* <button onClick={() => quantityDelete(ProductRecord.product.ID)}>delete</button> */}
                  </div>
                </>
              )
            }
            )}
          </div>
          <div className="cart_right_container">
            <div className="cartTotalItem">
              <h2>Total Items</h2>
              <h2>
                <span className="color">{userData.reduce(function (sum, current) {
                  return sum + current.QUANTITY; 
                }, 0)}</span>
              </h2>
            </div>
            <div className="cartTotalPay">
              <h2>Total Payments</h2>
              <h2 className="cartTotalPayPadding">
                {userData.reduce(function (sum, current) {
                  return sum + current.actualPrice;
                }, 0)}
              </h2>
              <br />
            </div>
            <h1 className="linebetween"></h1>
            <br />
            <Link class="grey_button" to={"/"}>
              CHECKOUT
              </Link>
            <button class="red_button position2" onClick={cleardata}>
              CLEAR
            </button>
          </div>
        </div>

              // {userData.splice(0, userData.length)} 
        // <div className="container-fluid">
        //   <div className="row">
        //     <div className="col-sm-8 ">
        //       <div className="ani ">
        //         <div className="row">
        //           {userData.map((ProductRecord) => {
        //             return (
        //               <>
        //                 <div className="col-sm-3 ">
        //                   <img
        //                     className="cart_card_image"
        //                     src={ProductRecord.product.IMAGE}
        //                     alt="Avatar"
        //                   />
        //                 </div>
        //                 <div className="col-sm-2 ">
        //                   <div>
        //                     <h3>{ProductRecord.product.NAME}</h3>
        //                     <h3>{ProductRecord.product.DISCOUNT_PRICE}</h3>
        //                   </div>
        //                 </div>
        //                 <div className="col-sm-2 ">
        //                   <div className="">
        //                     <h3>Qty. </h3>
        //                     <h3>{ProductRecord.quantity}</h3>
        //                   </div>
        //                 </div>
        //                 <div className="col-sm-2 ">
        //                   {/* <div className=""> */}
        //                   <h3 className="font_increase">
        //                     <Link to={"/"} onClick={() => quantityAdd(ProductRecord.product.ID)}>
        //                       <span><i class="fa fa-plus cartIcon"></i></span>
        //                     </Link>
        //                     <Link to={"/"} onClick={() => quantitySubtract(ProductRecord.product.ID)}>
        //                       <span><i class="fa fa-minus cartIcon"></i></span>
        //                     </Link>
        //                   </h3>
        //                 </div>
        //                 <div className="col-sm-2 ">
        //                   <Link to={"/"} onClick={() => quantityDelete(ProductRecord.product.ID)}>
        //                     <span><i class="fa fa-trash cartIconDelete"></i></span>
        //                   </Link>
        //                   {/* <button onClick={() => quantityDelete(ProductRecord.product.ID)}>delete</button> */}
        //                 </div>
        //               </>
        //             )
        //           }
        //           )}
        //         </div>
        //       </div>
        //     </div>

        //     <div className="col-sm-3  ">
        //       <div className="cart_right_container">
        //         <h2>Total Items</h2>

        //         <h2>
        //           <span className="color">{userData.reduce(function (sum, current) {
        //             return sum + current.quantity;
        //           }, 0)}</span>
        //         </h2>
        //         <h2>Total Payments</h2>
        //         <h2>
        //           {userData.reduce(function (sum, current) {
        //             return sum + current.price;
        //           }, 0)}
        //         </h2>
        //         <br />
        //         <h1 className="linebetween"></h1>
        //         <br />
        //         <Link class="grey_button" to={"/"}>
        //           CHECKOUT
        //       </Link>
        //         {/* <Link class="red_button position2" to={"/"}>
        //       CLEAR
        //       </Link> */}
        //         <button class="red_button position2" onClick={cleardata}>
        //           {/* {userData.splice(0, userData.length)} */}
        //       CLEAR
        //     </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      }
    </div>
  );
}


export default Cart;
