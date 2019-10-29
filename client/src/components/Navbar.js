import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Google Books Search
      </a>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Search
          </a>
          <a class="nav-item nav-link ml-5 mr-5" href="#">
            Save
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
