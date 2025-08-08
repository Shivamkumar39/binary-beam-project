import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialSquares = Array(8)
  .fill(null)
  .map((_, row) =>
    Array(8)
      .fill(null)
      .map((_, col) => ({
        row,
        col,
        baseColor: (row + col) % 2 === 0 ? 'white' : 'black',
        clicked: false,
      }))
  );

const chessSlice = createSlice({
  name: 'chess',
  initialState: {
    squares: initialSquares,
  },
  reducers: {
    toggleSquare: (state, action) => {
      const { row, col } = action.payload;
      const square = state.squares[row][col];
      square.clicked = !square.clicked;
    },
    resetBoard: (state) => {
      state.squares.forEach((row) => {
        row.forEach((square) => {
          square.clicked = false;
        });
      });
    },
  },
});

export const { toggleSquare, resetBoard } = chessSlice.actions;

const store = configureStore({
  reducer: {
    chess: chessSlice.reducer,
  },
});

export default store;
