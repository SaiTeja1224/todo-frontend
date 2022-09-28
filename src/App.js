import classes from "./App.module.css";

import Header from "./Components/Header/Header";
import Todos from "./Components/Todos/Todos";
import Result from "./Components/Result/Result";
import AddTasks from "./Components/AddTasks/AddTasks";

import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  // This is to perform initital request to get all the data from backend and display it using
  // UseState Hook and UseEffect Hook
  useEffect(() => {
    fetch("http://localhost:8000/tasks", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          throw new Error();
        }
        const initialData = Object.values(data.data);
        setTasks(initialData);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  // Request to delete all or single piece of data/tasks
  const delDataRequest = (delId) => {
    setError(false);

    let url = `http://localhost:8000/tasks/${delId}`;

    // if we send "all" in the delId we delete all the tasks. Else we delete specified task.
    if (delId === "all") {
      url = `http://localhost:8000/tasks/all`;
      setTasks([]);
    } else {
      setTasks((prev) => prev.filter((item) => item.id !== delId));
    }

    // Logic for deleting
    fetch(url, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          throw new Error();
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const addDataRequest = (newData) => {
    setError(false);

    // Adding new data locally
    const newId = tasks.length;
    const newTask = { id: newId, ...newData };
    setTasks((prev) => [...prev, newTask]);

    // Logic for adding new data
    let url = `http://localhost:8000/tasks/${newTask.id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          throw new Error();
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  // if there is any error from getting data or deleting we display error message or else
  // we display normal content
  const appContent = error ? (
    <p>Something went wrong!</p>
  ) : (
    <>
      <section>
        <Header>Todo List</Header>
      </section>
      <section>
        <AddTasks addTasksHelper={addDataRequest} />
        <Todos tasks={tasks} completeTaskHelper={delDataRequest} />
        <Result count={tasks.length} allCompleteHelper={delDataRequest} />
      </section>
    </>
  );

  return <article className={classes["todo-app"]}>{appContent}</article>;
}

export default App;
