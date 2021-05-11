import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartIcon() {
    const userData = useSelector(state => state.product.product)
    return (
        <div>
            {userData.length !== 0 ?
                    <>
                        <h1 className="cartnumber">{userData.reduce(function (sum, current) {
                            return sum + current.quantity;
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
    )
}

export default CartIcon
