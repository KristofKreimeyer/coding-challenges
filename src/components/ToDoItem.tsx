import type { Todo } from "../App";
import "./ToDoItem.css"

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: Readonly<Props>) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        name="inputTodo"
        id="inputTodo"
      />
        <label htmlFor="inputTodo">
            {todo.text}
        </label>
      <button disabled={todo.completed} onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
