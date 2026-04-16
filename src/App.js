import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import MeshGrid from "./components/MeshGrid";
import ComplexityPanel from "./components/ComplexityPanel";
import { meshShift } from "./utils/shiftLogic";

function createGrid(p) {
  const size = Math.sqrt(p);
  let count = 0;
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => count++)
  );
}

export default function App() {
  const [grid, setGrid] = useState(createGrid(16));
  const [afterRow, setAfterRow] = useState(null);
  const [afterCol, setAfterCol] = useState(null);

  const [step, setStep] = useState(0); // 👈 animation step
  const [info, setInfo] = useState({});

  const handleRun = (p, q) => {
    const newGrid = createGrid(p);
    const size = Math.sqrt(p);

    const result = meshShift(newGrid, size, size, q);

    setGrid(newGrid);
    setAfterRow(result.afterRow);
    setAfterCol(result.afterCol);
    setInfo({ p, q, ...result });

    setStep(0); // reset animation
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const autoPlay = () => {
    setStep(0);

    setTimeout(() => setStep(1), 800);
    setTimeout(() => setStep(2), 1600);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🟦 Mesh Circular Shift Visualizer</h1>

      <div style={styles.card}>
        <ControlPanel onSubmit={handleRun} />
      </div>

      <div style={styles.buttons}>
        <button onClick={nextStep} style={styles.btn}>
          Next Step
        </button>

        <button onClick={autoPlay} style={styles.btnAuto}>
          Auto Play
        </button>
      </div>

      {/* GRID DISPLAY WITH ANIMATION */}
      <div style={styles.gridSection}>
        {step === 0 && <MeshGrid grid={grid} title="Initial State" />}

        {step === 1 && afterRow && (
          <AnimatedGrid grid={afterRow} title="Row Shift (Stage 1)" />
        )}

        {step === 2 && afterCol && (
          <AnimatedGrid grid={afterCol} title="Column Shift (Final)" />
        )}
      </div>

      {info.p && (
        <div style={styles.card}>
          <ComplexityPanel {...info} />
        </div>
      )}
    </div>
  );
}

/* 🔥 Animated Grid Component */
function AnimatedGrid({ grid, title }) {
  return (
    <div style={styles.animatedCard}>
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

/* 🎨 STYLES */
const styles = {
  app: {
    fontFamily: "Arial",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    minHeight: "100vh",
    padding: "20px",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "15px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  btn: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
  btnAuto: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#22c55e",
    color: "white",
    cursor: "pointer",
  },
  gridSection: {
    display: "flex",
    justifyContent: "center",
  },
  animatedCard: {
    background: "#0b1220",
    padding: "20px",
    borderRadius: "12px",
    transition: "all 0.5s ease-in-out",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 50px)",
    gap: "6px",
    marginTop: "10px",
  },
  cell: {
    background: "#3b82f6",
    padding: "10px",
    borderRadius: "6px",
    textAlign: "center",
    fontWeight: "bold",
    transition: "0.3s",
  },
};