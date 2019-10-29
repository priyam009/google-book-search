import React from "react";
import "../App.css";

function Search(props) {
  return (
    <div className="container search-content">
      <h4>
        Book Search
      </h4>
      <form>
        <div className="form-group">
          <label htmlFor="inputBook">Book</label>
          <input
            type="email"
            className="form-control"
            id="inputBook"
            aria-describedby="bookHelp"
            placeholder="Enter Book"
          />
        </div>
        <button type="submit" className="btn btn-primary d-flex d-block justify-content-end">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Search;
