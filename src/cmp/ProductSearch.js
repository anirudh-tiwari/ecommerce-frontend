import React, { useState, useEffect } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";

const ProductSearch = (props) => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    Api.getSearchProducts(props.location.state.ProductSearch).then((response) => {
      setSearch(response.data)
    });
  }, [props])

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

