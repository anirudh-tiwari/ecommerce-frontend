import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cards: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "a",
        "b",
        "c",
        "d",
      ],
      currentPage: 1,
      cardsPerPage: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { cards, currentPage, cardsPerPage } = this.state;

    // Logic for displaying cards
    const indexOfLastTodo = currentPage * cardsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderCards = currentCards.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderCards}</ul>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Pagination;
