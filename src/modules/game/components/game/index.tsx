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

  function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
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
