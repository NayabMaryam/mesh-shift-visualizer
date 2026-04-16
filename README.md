# Mesh Circular Shift Visualizer

An interactive web application that simulates **Circular q-Shift on a 2D Mesh Topology** used in parallel computing systems.

The application demonstrates how data moves across a square mesh network using a **two-stage communication algorithm**:

1. **Row Shift**
2. **Column Shift**

It visually compares the efficiency of a **2D Mesh** against a naive **Ring Topology**.

---

## 🚀 Live Demo

👉 [Open Live Demo](mesh-shift-visualizer-black.vercel.app)

---

## 📌 Features

✅ User input for:
- Number of nodes `p`
- Shift distance `q`

✅ Automatic validation:
- `p` must be a perfect square
- `q` must satisfy `1 <= q < p`

✅ Visualization of:
- Initial state
- Row shift
- Final shifted state

✅ Interactive controls:
- Run simulation
- Next Step
- Auto Play animation

✅ Complexity comparison:
- Mesh steps
- Ring steps

---

## 🧠 Algorithm Used

For a mesh with:

p = R × C

The circular shift is divided into:

### Stage 1 — Row Shift
row_shift = q mod C

### Stage 2 — Column Shift
column_shift = floor(q / C)

### Total mesh communication steps
mesh_steps = row_shift + column_shift

Compared with ring:
ring_steps = min(q, p - q)

---

## 🏗 Project Structure

``` id="2wwnsy"
mesh-shift-visualizer/
├── public/
├── src/
│   ├── components/
│   │   ├── MeshGrid.js
│   │   ├── ControlPanel.js
│   │   └── ComplexityPanel.js
│   ├── utils/
│   │   └── shiftLogic.js
│   ├── App.js
│   └── index.js
├── README.md
└── package.json
