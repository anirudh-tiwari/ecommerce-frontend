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
  }, [])

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          {search.map((search_product) => (
            <div className="col-3 ">
              <Card product={search_product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductSearch;

// class ProductSearch extends React.Component {
//   constructor() {
//     super();
//     this.state = { search: [] };
//   }
//   componentDidMount() {
//     Api.getSearchProducts(this.props.location.state.ProductSearch).then((response) => {
//       this.setState({ search: response.data });
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div className="container-fluid">
//           <div className="row ">
//             {this.state.search.map((search_product) => (
//               <div className="col-3 ">
//                 <Card product={search_product} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

