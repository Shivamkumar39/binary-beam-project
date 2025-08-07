import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center bg-white dark:bg-gray-800 shadow-md p-4 mb-2 rounded-lg transition-all duration-300 ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo._id, !todo.completed)}
          className="w-5 h-5 text-indigo-600"
        />
        <span
          className={`text-lg ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-white"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-600 hover:text-red-800 transition"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
