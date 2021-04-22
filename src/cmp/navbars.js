import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbars = () => {
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
        <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul class="navbar-nav  ">
                    <li class="nav-item active">
                        <a class="nav-link fa fa-shopping-bag " href="#">
                            <span className="navbar_shopping_bag">Clothing Solutions</span>
                        </a>
                    </li>
                    <li class="nav-item navbar_store">
                        <a class="nav-link active" href="#">
                            Store
              </a>
                    </li>
                    <div>
                        <form onSubmit={onFormSubmit}>
                            <li class="nav-item navbar_search">
                                <input
                                    type="text"
                                    onChange={(e) => setTypes(e.target.value)}
                                    value={types}
                                    name="search"
                                    className="form-control search_dimension"
                                    placeholder="Search for products and more"
                                    autocomplete="off"
                                />
                            </li>
                            <button type="submit" className="form-control navbar_search_button" onClick={onFormSubmit} >
                                <span class="fa fa-search navbar_search_submit"></span>
                            </button>
                        </form>
                    </div>
                </ul>
                <ul class="navbar-nav ml-auto navbar_right_side">
                    <button class=" navbar_button ">Logout</button>
                    {userData.length !== 0 ?
                        <>
                            <h1 className="cartnumber">{userData.reduce(function (sum, current) {
                                return sum + current.quantity;
                            }, 0)}</h1>
                            <Link to="/cardview" className=" navbar_cart fa fa-shopping-cart ">
                                <span className="navbar_cart_text"></span>
                            </Link>
                        </> :
                        <Link to="/cardview" className=" navbar_cart fa fa-shopping-cart ">
                            <span className="navbar_cart_text"></span>
                        </Link>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbars;


