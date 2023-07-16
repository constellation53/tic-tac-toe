// Core
import { FC, ReactElement } from 'react';

// Other
import { PropsType } from './types';
import { Square } from './elements/square.tsx';

export const Board: FC<PropsType> = (): ReactElement => <>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
</>;
