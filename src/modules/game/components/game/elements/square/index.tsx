// Core
import { FC, ReactElement } from 'react';
import cx from 'classnames';

// Other
import { PropsType } from './types';

export const Square: FC<PropsType> = ({
  value,
  red,
  onClick,
}): ReactElement => (
  <button
    className={cx('square', { '--red': red })}
    onClick={onClick}
  >
    {value}
  </button>
);
