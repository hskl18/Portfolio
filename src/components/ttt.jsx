// TicTacToe.js
import React, { useState, useEffect } from 'react';
import { styles } from "../styles";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!isXNext && !winner && getAvailableMoves(board).length > 0) {
      setTimeout(() => {
        const move = minimax(board, 'O').index;
        const newBoard = board.slice();
        newBoard[move] = 'O';
        setBoard(newBoard);
        setIsXNext(true);
      }, 1000);
    }
  }, [board, isXNext, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;
    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  const remakeGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderSquare = (index) => (
    <button className="w-24 h-24 text-4xl font-bold border-4 border-white cursor-pointer bg-transparent bg-opacity-10 text-white flex items-center justify-center" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center py-10">
        {/* Always display these elements, regardless of game state */}
        <p className={styles.sectionSubText}>Relax, play it with Me</p>
        <h3 className={styles.sectionHeadText}>Tic Tac Toe</h3>
        <div className="m-5 text-3xl font-bold text-white">
            {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
        </div>
        <div className="flex flex-col border-2 border-white">
            {[0, 1, 2].map((row) => (
                <div className="flex" key={row}>
                    {[0, 1, 2].map((col) => renderSquare(3 * row + col))}
                </div>
            ))}
        </div>

        {/* Display the "Remake" button conditionally */}
        {(winner || getAvailableMoves(board).length === 0) ? (
            <button className="m-5 text-3xl font-bold text-white underline" onClick={remakeGame}>Remake</button>
        ): (
            <div className="m-5 text-3xl font-bold text-white"> 
                Contact me Down Below
            </div>
        )}
    </div>
);

};

//... (Rest of the code for minimax, getAvailableMoves, and calculateWinner remains unchanged)



const minimax = (newBoard, player) => {
  const availableMoves = getAvailableMoves(newBoard);

  if (calculateWinner(newBoard) === 'X') {
    return { score: -10 };
  } else if (calculateWinner(newBoard) === 'O') {
    return { score: 10 };
  } else if (availableMoves.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < availableMoves.length; i++) {
    const move = {};
    move.index = availableMoves[i];
    newBoard[availableMoves[i]] = player;

    if (player === 'O') {
      const g = minimax(newBoard, 'X');
      move.score = g.score;
    } else {
      const g = minimax(newBoard, 'O');
      move.score = g.score;
    }

    newBoard[availableMoves[i]] = null;
    moves.push(move);
  }

  let bestMove;
  if (player === 'O') {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
};

const getAvailableMoves = (board) => {
  const moves = [];
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) moves.push(i);
  }
  return moves;
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
};

export default TicTacToe;
