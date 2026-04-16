export default function ComplexityPanel({ p, q, rowShift, colShift }) {
  const meshSteps = rowShift + colShift;
  const ringSteps = Math.min(q, p - q);

  return (
    <div>
      <h3>Complexity</h3>
      <p>Row Shift: {rowShift}</p>
      <p>Column Shift: {colShift}</p>
      <p>Mesh Steps: {meshSteps}</p>
      <p>Ring Steps: {ringSteps}</p>
    </div>
  );
}