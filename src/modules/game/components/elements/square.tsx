// Core
import { FC } from 'react';

// Other
import { PropsType } from './types';

export const Square: FC<PropsType> = ({ value, onClick}) => {
  return <button className="square" onClick={onClick}>{value}</button>;
};
