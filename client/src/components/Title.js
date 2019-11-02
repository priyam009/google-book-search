import React from "react";
import "../index.css";

function Title(props) {
  return (
    <div className="container mt-5 result-content">
      <h2>{props.heading}</h2>
      <div>{props.children}</div>
    </div>
  )
}

export default Title;