import React, { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import classes from "./AddTasks.module.css";

export default function AddTasks(props) {
  // UseRef to access DOM element directly.
  const enteredTask = useRef(null);

  const [fieldError, setFieldError] = useState(true);

  // To get the value from DOM using ref and reseting the form.
  const addTaskHandler = function (e) {
    e.preventDefault();
    const taskName = enteredTask.current.value;
    props.addTasksHelper({ name: taskName });
    enteredTask.current.value = "";
    setFieldError(true);
  };

  // Getting error from input field.
  const getError = (error) => {
    setFieldError(error);
  };

  return (
    <section>
      <form onSubmit={addTaskHandler}>
        {/* Input Reusable Component */}
        <Input
          type="text"
          name="name"
          inputRef={enteredTask}
          cName="text-box"
          sendError={getError}
        />
        {/* Button Reusable Component */}
        <Button type="submit" cName="add" disable={fieldError}>
          Add
        </Button>
      </form>
    </section>
  );
}
