import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import CartIcon from "./cartIcon";

function Navbar() {
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
    let logout=()=>{
       localStorage.removeItem("accessToken")
       history.push('/');
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
                <Link className="navbarAbout" to="/about"> About</Link>
                <button class=" navbar_button " onClick={()=>logout()}>Logout</button>
                 < CartIcon / >
            </div>
        </div>
    )
}

export default Navbar
