import { useState } from "react";

export default function ControlPanel({ onSubmit }) {
  const [p, setP] = useState(16);
  const [q, setQ] = useState(5);

  return (
    <div style={styles.container}>
      <h3>Controls</h3>

      <input
        style={styles.input}
        value={p}
        onChange={(e) => setP(Number(e.target.value))}
        placeholder="p (e.g. 16)"
      />

      <input
        style={styles.input}
        value={q}
        onChange={(e) => setQ(Number(e.target.value))}
        placeholder="q (e.g. 5)"
      />

      <button style={styles.button} onClick={() => onSubmit(p, q)}>
        Run Shift
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    width: "120px",
  },
  button: {
    padding: "10px 15px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
  },
};