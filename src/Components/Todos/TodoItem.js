import React from "react";
import Button from "../UI/Button/Button";

import classes from "./TodoItem.module.css";

export default function TodoItem(props) {
  // This is a function to handle the completeion of task.
  const completedHandler = function () {
    props.completeTaskHelper(props.id);
  };

  return (
    <section className={classes["task-item"]}>
      <p>{props.name}</p>
      {/* Button Reusable Component */}
      <Button type="button" cName="complete" handler={completedHandler}>
        Done
      </Button>
    </section>
  );
}
