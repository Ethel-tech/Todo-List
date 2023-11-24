import { todoData } from "./TodoData.js";
import TodoItem from "./TodoItem.jsx";

const TodoList = () => {
  return (
    <div className="todo-list-div">
      {todoData.map((item) => (
        <TodoItem key={item.id} task={item.task} />
      ))}
    </div>
  );
};

export default TodoList;
