import React, { Component } from "react";
import "../index.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Result from "../components/Result";

class Save extends Component {
  render() {
    return (
      <>
      <Header />
      <Form />
      <Result title="Saved"/>
      </>
    )
  }
}

export default Save;