import React from "react";

import "./button.css";

// This is for resuable button which we use a lot in this application.
export default function Button(props) {
  const className = props.cName ? props.cName : "";
  return (
    <button
      className={className}
      type={props.type}
      onClick={props.handler}
      disabled={props.disable ? true : false}
    >
      {props.children}
    </button>
  );
}
