// Core
import { FC } from 'react';

// Other
import { PropsType } from './types';

export const Square: FC<PropsType> = ({ value }) => <button className="square">{value}</button>;
