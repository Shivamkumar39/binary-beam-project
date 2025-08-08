import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`
        min-h-screen flex flex-col items-center justify-center 
        transition-colors duration-500
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
      `}
    >
      <h1 className="text-5xl font-extrabold mb-8">
        Current Theme: {theme.toUpperCase()}
      </h1>

      <button
        onClick={toggleTheme}
        className={`
          px-8 py-4 rounded-md font-semibold shadow-md transition-colors duration-300
          ${theme === "dark"
            ? "bg-white text-gray-900 hover:bg-gray-300"
            : "bg-gray-900 text-white hover:bg-gray-700"}
        `}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}
