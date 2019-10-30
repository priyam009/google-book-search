import React, { Component } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Search />
        <Result />
      </>
    );
  }
}

export default App;
