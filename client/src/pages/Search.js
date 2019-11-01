import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Result from "../components/Result";
import API from "../utils/API";

class Search extends Component {
  state = {
    title: ""
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    API.getBooks(this.state.title)
      .then(res => console.log("back res", res))
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
