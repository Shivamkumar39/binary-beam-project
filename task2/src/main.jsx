import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import todoReducer from "./features/todoSlice";
import App from "./App";
import "./index.css";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
