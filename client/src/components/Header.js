import React from "react";
import "../index.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-center header-content">
      <div className="container">
        <h1 className="display-4">Google Books Search</h1>
        <p className="lead">Search for and Save Books of your Interest </p>
      </div>
    </div>
  );
}

export default Header;
