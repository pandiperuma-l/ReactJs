import "./App.css";
import React, { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function deleteTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
