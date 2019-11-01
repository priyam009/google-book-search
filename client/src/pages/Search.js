import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Result from "../components/Result";

class Search extends Component {
  state = {
    title: ""
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  
  handleClick = () => {
    console.log("Search is", this.state.title);
  }
  
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
