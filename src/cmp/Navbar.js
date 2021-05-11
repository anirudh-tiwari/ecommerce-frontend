import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartIcon from "./cartIcon";

function Navbar() {
    const userData = useSelector(state => state.product.product)
    const [types, setTypes] = useState("");
    let history = useHistory();
    const onFormSubmit = e => {
        e.preventDefault();
        setTypes('')
        history.push({
            pathname: '/productsearch',
            state: { ProductSearch: types }
        });

    }
    return (
        <div className="navbarLayout">
            <div className="navbarLeftSide">
                <div className="navbar_shopping_bag "><span><i class="fa fa-shopping-bag navbarShoppingBag" ></i></span>Clothing Solutions</div>
                <a className="navbarStore" href="/product">
                    Store
               </a>
                <div>
                    <form onSubmit={onFormSubmit}>
                        <input
                            type="text"
                            onChange={(e) => setTypes(e.target.value)}
                            value={types}
                            name="search"
                            className="form-control searchDimension"
                            placeholder="Search for products and more"
                            autocomplete="off"
                        />
                        <button type="submit" className="form-control searchIconDimension" onClick={onFormSubmit} >
                            <span class="fa fa-search navbarSearchSubmit"></span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="navbarRightSide">
                <a className="navbarAbout" href="/about">
                    About Us
               </a>
                <button class=" navbar_button ">Logout</button>
                 < CartIcon / >

                {/* {userData.length !== 0 ?
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
                } */}
            </div>
        </div>
    )
}

export default Navbar
