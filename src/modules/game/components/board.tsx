// Core
import { FC, ReactElement, useEffect, useState } from 'react';

// Elements
import { Index } from './elements/square';
import { Status } from './elements/status';

// Other
import { PropsType } from './types';
import { calculateWinner } from './utils';

export const Board: FC<PropsType> = (): ReactElement => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [status, setStatus] = useState<string>(`Next player: ${xIsNext ? 'X' : 'O'}`);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const winner = calculateWinner(squares);

  const onSquareClick = (index: number): void => {
    const nextSquares = squares.slice();

    if (squares[index] || winner) {
      return;
    }

    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
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
      <Index value={squares[0]} onClick={() => onSquareClick(0)}/>
      <Index value={squares[1]} onClick={() => onSquareClick(1)}/>
      <Index value={squares[2]} onClick={() => onSquareClick(2)}/>
    </div>
    <div className="board-row">
      <Index value={squares[3]} onClick={() => onSquareClick(3)}/>
      <Index value={squares[4]} onClick={() => onSquareClick(4)}/>
      <Index value={squares[5]} onClick={() => onSquareClick(5)}/>
    </div>
    <div className="board-row">
      <Index value={squares[6]} onClick={() => onSquareClick(6)}/>
      <Index value={squares[7]} onClick={() => onSquareClick(7)}/>
      <Index value={squares[8]} onClick={() => onSquareClick(8)}/>
    </div>
  </div>;
};
