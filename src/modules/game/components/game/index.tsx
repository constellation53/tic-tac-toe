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
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: string[] | null[]): void => {
    setHistory((prevHistory) => [...prevHistory, nextSquares]);
    setXIsNext(!xIsNext);
  };

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
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
