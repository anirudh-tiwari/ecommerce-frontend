import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import CartHover from "./cartHover"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartIcon() {
    const userData = useSelector(state => state.product.product)
    return (
        <div className="cartIconLogo">
            <div >
                {userData.length !== 0 ?
                    <>
                        <h1 className="cartnumber">{userData.reduce(function (sum, current) {
                            return sum + current.QUANTITY;
                        }, 0)}</h1>
                        <Link to="/cart" className=" navbar_cart fa fa-shopping-cart navbarCart">
                            <span className="navbar_cart_text"></span>
                        </Link>
                    </> :
                    <Link to="/cart" className=" navbar_cart fa fa-shopping-cart navbarCart">
                        <span className="navbar_cart_text"></span>
                    </Link>
                }
            </div>
            <div className="cartIconHover">
                {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                <CartHover />
            </div>
        </div>
    )
}

export default CartIcon
