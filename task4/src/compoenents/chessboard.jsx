import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSquare } from '../store';

export default function Chessboard() {
  const squares = useSelector((state) => state.chess.squares);
  const dispatch = useDispatch();

  const handleClick = (row, col) => {
    dispatch(toggleSquare({ row, col }));
  };

  return (
    <div className="w-[320px] h-[320px] grid grid-cols-8 grid-rows-8 border-4 border-black mx-auto mt-8">
      {squares.flat().map(({ row, col, baseColor, clicked }) => {
        let bgColor = baseColor === 'white' ? 'bg-white' : 'bg-black';

        if (clicked) {
          bgColor = baseColor === 'white' ? 'bg-yellow-400' : 'bg-red-600';
        }

        return (
          <div
            key={`${row}-${col}`}
            className={`${bgColor} border border-gray-400 w-10 h-10 cursor-pointer`}
            onClick={() => handleClick(row, col)}
          />
        );
      })}
    </div>
  );
}
