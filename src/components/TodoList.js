import React from "react";
import complete from "../images/complete.png";
import edit from "../images/edit.png";
import delet from "../images/delete.png";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <img src={complete} className="img" alt="slika" />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <img src={edit} className="img" alt="slika" />
            </button>
            <button className="button-delete task-button">
              <img
                src={delet}
                className="img"
                alt="slika"
                onClick={() => handleDelete(todo)}
              />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
