import React, { useState, useEffect } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";
import {useLocation , Redirect} from "react-router-dom";

const ProductSearch = (props) => {
  const location = useLocation()
  const [search, setSearch] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const token = localStorage.getItem("accessToken") 

  useEffect(() => {
    if(location.state){
      Api.getSearchProducts(location.state.ProductSearch).then((response) => {
        setSearch(response.data)
      });
    }
  }, [location])

  if(loggedIn === false){
    return <Redirect to='/' />;
  }

  return (
    <div>
    {token== null?setLoggedIn(false):null}
      <div className="cardLayout">
          {search.map((search_product) => (
            <div >
              <Card product={search_product} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductSearch;

