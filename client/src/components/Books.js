import React from "react";
import "../index.css";

function Books(props) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-subtitle mb-2 text-muted">{props.authors}</p>
          </div>
          <div>
            <button
              href={props.link}
              target="_blank"
              className="card-link btn btn-primary"
            >
              View
            </button>
            <button
              className="card-link btn btn-primary"
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
