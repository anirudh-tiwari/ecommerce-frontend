import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Api from "../Api";
import Card from "./card";

class Search_card extends React.Component {
  constructor() {
    super();
    this.state = { search: [] };
  }
  componentDidMount() {
    Api.getSearchProducts(this.props.searchProductName).then((response) => {
      this.setState({ search: response.data });
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            {this.state.search.map((search_product) => (
              <div className="col-3 ">
                <Card product={search_product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search_card;
