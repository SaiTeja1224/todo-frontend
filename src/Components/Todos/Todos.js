import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  // Extracting individual items from the array and creating components.
  const todoItems = props.tasks.map((items, i) => (
    <TodoItem
      key={i}
      name={items.name}
      id={items.id}
      completeTaskHelper={props.completeTaskHelper}
    />
  ));

  return <>{todoItems}</>;
}
