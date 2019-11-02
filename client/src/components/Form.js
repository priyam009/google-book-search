import React from "react";
import "../index.css";

class Form extends React.Component {

  onInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.props.handleChange(name, value)
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleClick()
  }

  render() {
    return (
      <div className="container search-content">
        <h4>Book Search</h4>
        <form>
          <div className="form-group">
            {/* <label htmlFor="inputBook">Book</label> */}
            <input
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.onInputChange}
              className="form-control"
              id="inputBook"
              aria-describedby="bookHelp"
              placeholder="Enter Book"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary d-flex d-block justify-content-end"
            onClick={this.onFormSubmit}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
