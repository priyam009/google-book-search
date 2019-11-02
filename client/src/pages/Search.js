import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Books from "../components/Books";
import Title from "../components/Title";
import API from "../utils/API";

class Search extends Component {
  state = {
    title: "",
    books: []
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    API.googleBooks(this.state.title)
      .then(res => {
        const response = res.data.items;
        const newBooks = [];

        for (let i = 0; i < 10; i++) {
          if (response[i].volumeInfo.imageLinks) {
            let book = {
              authors: response[i].volumeInfo.authors.join(","),
              description: response[i].volumeInfo.description,
              image: response[i].volumeInfo.imageLinks.smallThumbnail,
              link: response[i].volumeInfo.infoLink,
              title: response[i].volumeInfo.title,
              subtitle: response[i].volumeInfo.subtitle
            };

            newBooks.push(book);
          }
        }
        this.setState({
          books: newBooks
        });
      })
      .catch(err => console.log(err));
  };

  handleBook = book => {
    console.log("book", book);
    API.saveBook({
      title: book.title || "",
      subtitle: book.subtitle || "",
      authors: book.authors || "",
      description: book.description || "",
      image: book.image || "",
      link: book.link || ""
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Header />
        <Form
          title={this.state.title}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <Title heading="Results">
          {this.state.books.map((book, index) => (
            <Books
              key={index}
              action="Save"
              id={index}
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
    );
  }
}

export default Search;
