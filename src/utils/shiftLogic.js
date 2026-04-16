export function meshShift(grid, R, C, q) {
  const P = R * C;
  q = q % P;

  const rowShift = q % C;
  const colShift = Math.floor(q / C);

  // Row shift
  let afterRow = grid.map(row =>
    row.map((_, c) => row[(c - rowShift + C) % C])
  );

  // Column shift
  let afterCol = Array.from({ length: R }, (_, r) =>
    Array.from({ length: C }, (_, c) =>
      afterRow[(r - colShift + R) % R][c]
    )
  );

  return { afterRow, afterCol, rowShift, colShift };
}