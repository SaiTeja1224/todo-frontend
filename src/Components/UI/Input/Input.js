import React, { useState } from "react";

import "./Input.css";

export default function Input(props) {
  const [inputError, setInputError] = useState(false);

  // When unfocusing input we check if the input has no content and set visual clues for errors
  const errorHandler = (e) => {
    if (props.inputRef.current.value === "") {
      setInputError(true);
      props.sendError(true);
    } else {
      setInputError(false);
      props.sendError(false);
    }
  };

  //Setting error class
  let className = inputError ? "input-error" : "";
  className = props.cName ? `${className} ${props.cName}` : className;

  return (
    <input
      type={props.type}
      name={props.name}
      ref={props.inputRef}
      className={className}
      autoComplete="off"
      onBlur={errorHandler}
      onInput={errorHandler}
    />
  );
}
