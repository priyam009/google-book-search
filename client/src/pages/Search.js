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
    API.getBooks(this.state.title)
      .then(res => {
        // console.log("Response", res);
        // console.log("Count", res.data.items)

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

        // console.log("Books", this.state.books);
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
        <Result title="Results" action="Save" />
      </>
    );
  }
}

export default Search;
