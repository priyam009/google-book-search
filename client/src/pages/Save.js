import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Title from "../components/Title";
import Books from "../components/Books";
import API from "../utils/API";

class Save extends Component {
  state = {
    books: {}
  }

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
      <Header />
      <Title heading="Saved">
          {this.state.books.map((book, index) => (
            <Books
              key={index}
              action="Save"
              title={book.title}
              subtitle={book.subtitle}
              description={book.description}
              image={book.image}
              authors={book.authors}
              link={book.link}
              handleBook={this.handleBook}
            />
          ))}
        </Title>
      </>
    )
  }
}

export default Save;