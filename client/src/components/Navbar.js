import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Searchtopia
      </a>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            Search
          </a>
          <a className="nav-item nav-link ml-5 mr-5" href="/save">
            Save
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
