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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
