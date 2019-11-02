import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Title from "../components/Title";
import Books from "../components/Books";
import API from "../utils/API";

class Save extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ savedBooks: res.data })
      )
      .catch(err => console.log(err));
  };

  handleBook = book => {
    API.deleteBook(book.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Header />
        <Title heading="Saved">
          {this.state.savedBooks.length ? (
            <>
              {this.state.savedBooks.map((book, index) => (
                <Books
                  key={index}
                  action="Delete"
                  id={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  description={book.description}
                  image={book.image}
                  authors={book.authors}
                  link={book.link}
                  handleBook={this.handleBook}
                />
              ))}
            </>
          ) : (
            <h5>No Results to Display</h5>
          )}
        </Title>
      </>
    );
  }
}

export default Save;
