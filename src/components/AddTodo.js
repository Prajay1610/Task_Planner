import React, { useContext, useState } from "react";
import "./AddTodo.css";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodoAction, state } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  console.log(state);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoAction(title);
    setTitle("");
  };
  return (
    <div className="form-wrapper">
      <h1>TASK PLANNER</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
