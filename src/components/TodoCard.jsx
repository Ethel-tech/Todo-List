import { useState } from "react";
import "./todo.scss";
import { todoData } from "./TodoData.js";
import TodoList from "./TodoList";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [listId, setListId] = useState(todoData.length);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleId = () => {
    setListId(listId + 1);
  };

  const handleSubmit = () => {
    todoData.push({ id: listId, task: inputValue });
    // console.log(todoData);
    setInputValue("");
  };

  const testFilter = ["Red", "Blue", "Green"];

  const color = testFilter.filter((filt) => filt.length > 4);

  const colorFunc = testFilter.filter((filt) => filt === "Blue");

  const filtArry = todoData.filter((filt) => filt.id === 2);
  

  return (
    <div className="todo-main-div">
      <h1 className="todo-title">Todo List</h1>
      <br />
      <div>
        <label htmlFor="" className="">
          Enter Task:{" "}
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          className="todo-input"
        />

        <button
          className=""
          onClick={() => {
            handleSubmit();
            handleId();
          }}
        >
          Submit
        </button>
      </div>
      <TodoList />
      <p>{testFilter}</p>
      <p>{color}</p>
      <p>{colorFunc}</p>
    </div>
  );
}
