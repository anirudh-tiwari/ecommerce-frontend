import React, { useState, useEffect } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";
import {useLocation} from "react-router-dom";

const ProductSearch = (props) => {
  const location = useLocation()
  const [search, setSearch] = useState([]);
  useEffect(() => {
    if(location.state){
      Api.getSearchProducts(location.state.ProductSearch).then((response) => {
        setSearch(response.data)
      });
    }
  }, [location])

  return (
    <div>
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

