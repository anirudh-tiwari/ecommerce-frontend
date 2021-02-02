import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Loadmore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 4 };
  }

  render() {
    return (
      <>
        {this.props.state.value < this.props.state.product.length && (
          <button
            type="button"
            className="card_loadMore_button"
            onClick={this.props.loadmore}
          >
            Load More ...
          </button>
        )}
      </>
    );
  }
}

export default Loadmore;
