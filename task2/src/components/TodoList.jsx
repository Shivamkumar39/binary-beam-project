import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../features/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.todos);
  const token = useSelector(state => state.auth.token);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (token) dispatch(fetchTodos(token));
  }, [token, dispatch]);

  const handleAddTodo = e => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch(addTodo({ token, todo: { title: newTodo } }));
    setNewTodo("");
  };

  const handleToggleComplete = (id, completed) => {
    dispatch(updateTodo({ token, id, updates: { completed } }));
  };

  const handleDelete = id => {
    dispatch(deleteTodo({ token, id }));
  };

  if (loading) return <p className="text-center mt-8">Loading todos...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleAddTodo} className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="text-black flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 duration-300"
        >
          Add
        </button>
      </form>
      <ul>
        {items.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
