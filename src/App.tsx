import { FC, ReactElement, useState } from 'react';
import reactLogo from './assets/react.svg';
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.css';

export const Square = (): ReactElement => <button className="square">X</button>;

type PropsType = {
  children?: never;
};

const App: FC<PropsType> = (): ReactElement => {
  const [count, setCount] = useState(0);

  const onClick = (): void => setCount((value) => value + 1);

  return (
    <Square/>
  );
};

export default App;
