import React from 'react';
import { useDispatch } from 'react-redux';
import Chessboard from './compoenents/chessboard';
import { resetBoard } from './store';

export default function App() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetBoard());
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Chess Board with Redux</h1>
      <Chessboard />
      <button
        onClick={handleReset}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Reset Board
      </button>
    </div>
  );
}
