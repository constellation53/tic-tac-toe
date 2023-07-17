import { FC, ReactElement } from 'react';
import { Game } from './modules/game/components/game/index.tsx';
import './App.css';

type PropsType = {
  children?: never;
};

export const App: FC<PropsType> = (): ReactElement => <Game/>;
