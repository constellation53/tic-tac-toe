// Core
import { FC } from 'react';

// Other
import { PropsType } from './types';

export const Square: FC<PropsType> = ({ value}) => {
  return <button className="square" >{value}</button>;
};
