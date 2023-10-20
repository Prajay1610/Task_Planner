import React, { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();
//initial State

//get data from localStorage
const getTodos = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

const INITIAL_STATE = getTodos();
//reducer fxn
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "REMOVE_TODO":
      return state.filter((state) => state.id !== action.payload);

    default:
      return state;
  }
  return state;
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  //save to local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  //Add Todo Action
  const addTodoAction = (title) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: state.length + 1,
        title,
      },
    });
  };

  //Remove TodoItem Action
  const removeTodoAction = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };
  return (
    <>
      <TodoContext.Provider value={{ state, addTodoAction, removeTodoAction }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
