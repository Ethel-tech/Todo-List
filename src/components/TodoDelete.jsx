import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./todo.scss";
import { todoData } from "./TodoData";
import TodoItem, { task } from "./TodoItem";
import { useState } from "react";

const TodoDelete = () => {
  const [todoId, setTodoId] = useState(todoData.length);
  // const filterId = (num) => {
  //   if (num.id) {
  //     return true;
  //   }
  //   return false;
  // };

  // const handleDelete = todoData.filter(filterId);

  // const filtArry = todoData.filter((filt) => filt.id === 2);
  // so get the id when a user clicks the delete button and filter every other item that doesn't have that id

  const handleDelete = () => {
    // if (todoData) {
    //   todoData.pop();
    //   console.log(todoData);
    // }
    // return todoData;
  };
  return (
    <button className="todo-delete-button" onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />
    </button>
  );
};

export default TodoDelete;
