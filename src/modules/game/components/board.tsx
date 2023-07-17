// Core
import { FC, ReactElement, useState } from 'react';

// Other
import { PropsType } from './types';
import { Index } from './elements/square';
import { calculateWinner } from './utils';

export const Board: FC<PropsType> = (): ReactElement => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  const onSquareClick = (index: number): void => {
    const nextSquares = squares.slice();
    if (squares[index] || calculateWinner(squares)) {
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

  return <div>
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
