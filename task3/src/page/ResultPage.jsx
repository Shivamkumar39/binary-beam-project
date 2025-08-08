import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    // If no data passed, redirect to form page
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Submitted Data</h2>
      <ul className="space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="flex justify-between border-b pb-2">
            <strong className="capitalize">{key}</strong>
            <span>{value || "N/A"}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate("/")}
        className="mt-6 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
      >
        Back to Form
      </button>
    </div>
  );
}
