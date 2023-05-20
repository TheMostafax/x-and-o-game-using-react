import React, { useState } from 'react';

const GameLogic = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (winner || cells[i]) {
      return;
    }

    const newCells = [...cells];
    newCells[i] = player;
    setCells(newCells);

    const newWinner = checkWin(newCells);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const handleRestart = () => {
    setCells(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  const checkWin = (cells) => {
    for (let i = 0; i < 9; i += 3) {
      if (cells[i] && cells[i] === cells[i + 1] && cells[i] === cells[i + 2]) {
        return cells[i];
      }
    }

    for (let i= 0; i < 3; i++) {
      if (cells[i] && cells[i] === cells[i + 3] && cells[i] === cells[i + 6]) {
        return cells[i];
      }
    }

    if (cells[0] && cells[0] === cells[4] && cells[0] === cells[8]) {
      return cells[0];
    }

    if (cells[2] && cells[2] === cells[4] && cells[2] === cells[6]) {
      return cells[2];
    }

    return null;
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-blue-900">
      <h1 className="text-4xl font-serif font-bold mb-8 text-white">X and O game</h1>
      <div className="grid grid-cols-3 gap-4 w-64 sm:w-80 md:w-96 mx-auto">
        {cells.map((cell, i) => (
          <button
            key={i}
            className="bg-gray-100 rounded-md py-4 text-4xl font-bold border-red-500 border-2 px-4 hover:bg-gray-500 font-serif"
            onClick={() => handleClick(i)}
            disabled={cell !== null || winner !== null}
          >
            {cell}
          </button>
        ))}
      </div>
      <p className="text-lg font-bold font-serif text-white my-4 text-center">
        {winner ? (
          <>
            Congratulation {winner} wins the game!<br />
            Click restart if you want to play another game
          </>
        ) : cells.every((cell) => cell !== null) ? (
          "It's a tie! No one wins"
        ) : (
          `Now its ${player}'s turn`
        )}
      </p>
      <button className="bg-red-500 border-white border-2 rounded-md py-2 px-4 text-lg font-bold hover:bg-green-500" onClick={handleRestart}>
        Restart
      </button>
    </div>
    </>
   
  );
};

export default GameLogic;