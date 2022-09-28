import React from "react";
import Button from "../UI/Button/Button";

import classes from "./Result.module.css";

export default function Result(props) {
  // This is to delete all the tasks at once when needed.
  const allDelHandler = () => {
    props.allCompleteHelper("all");
  };

  return (
    <section className={classes.result}>
      <p>{`You have ${props.count} tasks left`}</p>
      {/* Button Reusable Component */}
      <Button
        type="button"
        cName="all-clear"
        handler={allDelHandler}
        disable={props.count === 0 ? true : false}
      >
        Clear All
      </Button>
    </section>
  );
}
