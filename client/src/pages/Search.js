import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Result from "../components/Result";

class Search extends Component {
  render() {
    return (
      <>
      <Header />
      <Form />
      <Result title="Results"/>
      </>
    )
  }
}

export default Search;