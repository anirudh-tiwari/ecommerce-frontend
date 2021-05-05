import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function CartHover() {
    const userData = useSelector(state => state.product.product)
    return (
        <>
            {userData.length === 0 ?
                <div className="cartHoverEmpty">
                    <span><i class="fa fa-shopping-bag cartBag "></i></span>
                    <h2 className="cartBagText">Your shopping cart is empty right now, but it doesn't have to be!</h2>
                    <div className="cartBorder"></div><br />
                    <Link to="/product" className="cartBagButton " >
                        Go Shopping
                </Link>
                </div> :
                <div className="cartHover">
                    <div className="cartHoverProduct">
                        {userData.map((ProductRecord) => {
                            return (<div className="cartHoverProductDetail">
                                <div>
                                    <img
                                        className="cart_card_image"
                                        src={ProductRecord.product.IMAGE}
                                        alt="Avatar"
                                    />
                                </div>
                                <h3>{ProductRecord.product.NAME}</h3>
                                <h3>{ProductRecord.product.DISCOUNT_PRICE}</h3>
                                <h3>{ProductRecord.quantity}</h3>
                                {/* <div className="cartBorder"></div> */}
                            </div>)
                        }
                        )}
                    </div>
                    <div className="cartHoverTotal">
                        <h2 className="cartHoverTotalPrice">Total</h2>
                ₹{userData.reduce(function (sum, current) {
                            return sum + current.price;
                        }, 0)}
                    </div>
                    <div>
                        <Link to="/cart" className="cartHoverCheckCart">
                            Check my cart
                </Link>
                        <button className="cartHoverCheckout">Checkout</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CartHover
