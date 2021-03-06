import React from "react";
import "../index.css";

function Books(props) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="w-50">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-subtitle mb-2 text-muted">{props.authors}</p>
          </div>
          <div>
            <button className="card-link btn btn-dark">
              <a rel="noopener noreferrer" href={props.link} className="text-light books-anchor" target="_blank">View</a>
            </button>
            <button
              className="card-link btn btn-dark"
              onClick={() => props.handleBook(props)}
            >
              {props.action}
            </button>
          </div>
        </div>
        <div className="d-flex">
          <img src={props.image} className="card-img-top" alt={props.title} />
          <p className="card-text ml-3">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Books;
