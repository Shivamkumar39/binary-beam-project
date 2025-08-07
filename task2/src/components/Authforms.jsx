import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../features/authSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector(state => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser(form));
    } else {
      dispatch(registerUser(form));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center">{isLogin ? "Login" : "Register"}</h2>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-3 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
          required
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition transform hover:scale-105 duration-300 disabled:opacity-50"
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Register"}
        </button>
        <p className="text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
