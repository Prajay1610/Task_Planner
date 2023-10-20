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
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
