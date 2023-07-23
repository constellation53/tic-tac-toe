// Core
import { FC, ReactElement } from 'react';

// Components
import { Game } from './modules/game/components/game/index.tsx';

// Other
import './app.css';

type PropsType = {
  children?: never;
};

export const App: FC<PropsType> = (): ReactElement => <Game/>;
