import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Search />
      </>
    );
  }
}

export default App;
