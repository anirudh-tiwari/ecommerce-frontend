import React, { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbars = () => {
    const [types, setTypes] = useState("");
    let history = useHistory();
    const searchproduct = () => {
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
                        <li class="nav-item navbar_search">
                            <input
                                type="text"
                                onChange={(e) => setTypes(e.target.value)}
                                name="search"
                                className="form-control search_dimension"
                                placeholder="Search for products and more"
                                autocomplete="off"
                            />
                        </li>
                        <button className="form-control navbar_search_button" onClick={searchproduct}>
                            <span class="fa fa-search navbar_search_submit"></span>
                        </button>
                    </div>
                </ul>
                <ul class="navbar-nav ml-auto navbar_right_side">
                    <button class=" navbar_button ">Logout</button>
                    <Link to="/cardview" className=" navbar_cart fa fa-shopping-cart ">
                        <span className="navbar_cart_text">Cart</span>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbars;


// class Navbars extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { types: "", search: [] };
//     }

//     render() {
//         return (
//             <div>
//                 <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
//                     <ul class="navbar-nav  ">
//                         <li class="nav-item active">
//                             <a class="nav-link fa fa-shopping-bag " href="#">
//                                 <span className="navbar_shopping_bag">Clothing Solutions</span>
//                             </a>
//                         </li>
//                         <li class="nav-item navbar_store">
//                             <a class="nav-link active" href="#">
//                                 Store
//               </a>
//                         </li>
//                         <li class="nav-item navbar_search">
//                             <input
//                                 type="text"
//                                 onChange={(e) => {
//                                     this.setState({
//                                         types: e.target.value,
//                                     });
//                                 }}
//                                 name="search"
//                                 className="search_dimension"
//                                 placeholder="Search for products and more"
//                             />
//                         </li>
//                         <Link to={`/search_card/${this.state.types}`}>
//                             <span class="fa fa-search search_icon"></span>
//                         </Link>
//                     </ul>
//                     <ul class="navbar-nav ml-auto navbar_right_side">
//                         <button class=" navbar_button ">Logout</button>
//                         <Link to="/cardview" className=" navbar_cart fa fa-shopping-cart ">
//                             <span className="navbar_cart_text">Cart</span>
//                         </Link>
//                     </ul>
//                 </nav>
//             </div>
//         );
//     }
// }

// export default Navbars;
