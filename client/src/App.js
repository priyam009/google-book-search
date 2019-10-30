import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Result />
    </>
  );
}

export default App;
