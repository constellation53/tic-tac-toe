import { FC, ReactElement } from 'react';
import { Board } from './modules/game/components/board.tsx';
import './App.css';

type PropsType = {
  children?: never;
};

export const App: FC<PropsType> = (): ReactElement => <Board/>;
