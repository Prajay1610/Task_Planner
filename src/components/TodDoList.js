import React, { useContext } from "react";
import "./ToDoList.css";
import { TodoContext } from "../context/TodoContext";

const TodDoList = () => {
  const { state, removeTodoAction } = useContext(TodoContext);

  console.log(state);
  return (
    <div className="todo-list-container">
      {state.map((todo) => {
        return (
          <div key={todo.id} className="todo-item-container">
            <h3>{todo.title}</h3>
            <button onClick={() => removeTodoAction(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodDoList;
