import TodoDate from "./TodoDate";
import TodoDelete from "./TodoDelete";

const TodoItem = ({ task }) => {
  return (
    <div className="todo-list">
      <li className="item-list">
        {task}
        <span className="todo-date">
          <TodoDate />
        </span>
        <span className="editanddel">
          <TodoDelete />
        </span>
      </li>
    </div>
  );
};

export default TodoItem;
