export default function MeshGrid({ grid, title }) {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>

      <div style={styles.grid}>
        {grid.flat().map((val, i) => (
          <div key={i} style={styles.cell}>
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#0b1220",
    padding: "15px",
    borderRadius: "12px",
    minWidth: "220px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 45px)",
    gap: "5px",
    marginTop: "10px",
  },
  cell: {
    background: "#2563eb",
    color: "white",
    padding: "10px",
    textAlign: "center",
    borderRadius: "6px",
    fontWeight: "bold",
  },
};