import React, { Component } from "react";
import "../index.css";

class Result extends Component {
  render() {
    return (
      <div className="container mt-5 result-content">
        <h2>Results</h2>
        <div>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Book Name</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Book Author</h6>
                </div>
                <div>
                  <button href="#" className="card-link btn btn-primary">
                    View (URL)
                  </button>
                  <button href="#" className="card-link btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src="https://picsum.photos/200"
                  className="card-img-top"
                  alt="Example image"
                />
                <p className="card-text ml-3">Book Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
