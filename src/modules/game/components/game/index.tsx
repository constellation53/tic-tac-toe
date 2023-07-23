// Core
import { FC, useState } from 'react';

// Components
import { Board } from './board.tsx';

type PropsType = {
  children?: never;
};

export const Game: FC<PropsType> = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<(string[] | null[])[]>(
    [Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[] | null[]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number): void => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  };

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
