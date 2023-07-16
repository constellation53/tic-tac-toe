// Core
import { FC, useState } from 'react';

// Other
import { PropsType } from './types';

export const Square: FC<PropsType> = () => {

  const [value, setValue] = useState<string | null>(null);
  const onClick = (): void => {
    setValue('X');
  };

  return <button className="square" onClick={onClick}>{value}</button>;
};
