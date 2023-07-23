// Core
import { FC, ReactElement, useEffect, useState } from 'react';

// Elements
import { Square } from './elements/square';
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

  const [winner, combination] = calculateWinner(squares);

  const handleSquareClick = (index: number): void => {
    const square = xIsNext ? 'X' : 'O';

    const nextSquares = [...squares.slice(0, index), square, ...squares.slice(index + 1)];

    if (squares[index] || winner) {
      return;
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

  const listJSX = squares.map((square, index) => {
    const onClick = (): void => handleSquareClick(index);

    return <Square value={square} onClick={onClick}/>;
  });

  return <div>
    <Status text={status} />
    <div className="board-row">
      {listJSX}
    </div>
  </div>;
};
