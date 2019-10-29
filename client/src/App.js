import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
      </>
    );
  }
}

export default App;
