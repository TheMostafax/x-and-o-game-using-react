import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const Instructions = () => {
  return (
    <>
    <div className="bg-white rounded-md p-4 mb-8 flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold mb-4">How to Play:</h2>
      <p className="mb-2">
        1. The game board has 9 cells arranged in a 3x3 grid.
      </p>
      <p className="mb-2">
        2. Players take turns placing their symbol (X or O) in an empty cell.
      </p>
      <p className="mb-2">
        3. The first player to get 3 symbols in a row (horizontally, vertically, or diagonally) wins.
      </p>
      <p className="mb-2">
        4. If all cells are filled and no player has won, the game is a tie.
      </p>
      
    </div>
    </>
    
  );
};

export default Instructions;