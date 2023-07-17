// Core
import { FC, ReactElement, useEffect, useState } from 'react';

// Elements
import { Index } from './elements/square';
import { Status } from './elements/status';

// Other
import { PropsType } from './types';
import { calculateWinner } from './utils';

export const Board: FC<PropsType> = ({
  xIsNext,
  squares,
  onPlay,
}): ReactElement => {
  const [status, setStatus] = useState<string>(`Next player: ${xIsNext ? 'X' : 'O'}`);

  const winner = calculateWinner(squares);

  const handleSquareClick = (index: number): void => {
    const nextSquares = squares.slice();

    if (squares[index] || winner) {
      return;
    }

    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }

    onPlay(nextSquares);
  };

  useEffect(() => {
    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }
  }, [winner, xIsNext]);

  return <div>
    <Status text={status} />
    <div className="board-row">
      <Index value={squares[0]} onClick={() => handleSquareClick(0)}/>
      <Index value={squares[1]} onClick={() => handleSquareClick(1)}/>
      <Index value={squares[2]} onClick={() => handleSquareClick(2)}/>
    </div>
    <div className="board-row">
      <Index value={squares[3]} onClick={() => handleSquareClick(3)}/>
      <Index value={squares[4]} onClick={() => handleSquareClick(4)}/>
      <Index value={squares[5]} onClick={() => handleSquareClick(5)}/>
    </div>
    <div className="board-row">
      <Index value={squares[6]} onClick={() => handleSquareClick(6)}/>
      <Index value={squares[7]} onClick={() => handleSquareClick(7)}/>
      <Index value={squares[8]} onClick={() => handleSquareClick(8)}/>
    </div>
  </div>;
};
