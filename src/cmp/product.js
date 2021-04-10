import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";
// import Loadmore from "./loadmore";
import ImageSlider from "./imageslider";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Api.getProduct().then((response) => {
      setProduct(response.data)
    });
  }, [])

  return (
    <div>
      <ImageSlider />
      <div className="container-fluid">
        <div className="row ">
          {product
            // .slice(0, this.state.value)
            .map((ProductRecord) => {
              return (
                <div className="col-3 ">
                  <Card product={ProductRecord} />
                </div>
              );
            })}
        </div>
        {/* <Loadmore state={this.state} loadmore={this.loadmore} /> */}
      </div>
    </div>
  )
}

export default Product;

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { product: [], name: "", value: 4 };
//     this.loadmore = () => {
//       this.setState({ value: this.state.value + 4 });
//     };
//   }
//   componentDidMount() {
//     Api.getProduct().then((response) => {
//       this.setState({ product: response.data });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <ImageSlider />
//         <div className="container-fluid">
//           <div className="row ">
//             {this.state.product
//               .map((ProductRecord) => {
//                 return (
//                   <div className="col-3 ">
//                     <Card product={ProductRecord} />
//                   </div>
//                 );
//               })}
//           </div>
//           <Loadmore state={this.state} loadmore={this.loadmore} />
//         </div>
//       </div>
//     );
//   }
// }

