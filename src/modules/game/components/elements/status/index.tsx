// Core
import { FC, ReactElement } from 'react';

// Others
import { PropsType } from './types';

export const Status: FC<PropsType> = ({ text }): ReactElement => <div className="status">{text}</div>;
