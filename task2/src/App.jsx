import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/authSlice";
import AuthForm from "./components/Authforms";
import TodoList from "./components/TodoList.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <header className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">MERN Todo App</h1>
        {token && (
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition transform hover:scale-105"
          >
            Logout
          </button>
        )}
      </header>

      <main className="max-w-4xl mx-auto p-4">
        {token ? <TodoList /> : <AuthForm />}
      </main>
    </div>
  );
};

export default App;
