export type PropsType = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
  children?: never;
};
