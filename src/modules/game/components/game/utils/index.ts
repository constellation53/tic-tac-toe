export const calculateWinner = (squares: (string | null)[]): [string | null, number[] | null] => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    const isCombination = squares[a] && squares[a] === squares[b] && squares[a] === squares[c];

    if (isCombination) {
      const combination = lines[i];
      const player = squares[a] || 'ERROR';
      return [player, combination];
    }
  }

  return [null, null];
};
