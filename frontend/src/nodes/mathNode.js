import { useState, useMemo } from "react";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {
  const [a, setA] = useState(data?.a ?? 0);
  const [b, setB] = useState(data?.b ?? 0);
  const [op, setOp] = useState(data?.op ?? "+");

  //live calculation
  const result = useMemo(() => {
    const x = Number(a);
    const y = Number(b);

    if (op === "+") return x + y;
    if (op === "-") return x - y;
    if (op === "*") return x * y;
    if (op === "/") return y !== 0 ? x / y : "∞";

    return 0;
  }, [a, b, op]);

  return (
    <BaseNode title="Math Calculator">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        
        {/* INPUT A */}
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="A"
          style={{
            padding: 6,
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />

        {/* OPERATOR */}
        <select
          value={op}
          onChange={(e) => setOp(e.target.value)}
          style={{
            padding: 6,
            borderRadius: 6,
          }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        {/* INPUT B */}
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="B"
          style={{
            padding: 6,
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />

        {/* RESULT */}
        <div
          style={{
            marginTop: 6,
            padding: 6,
            background: "#f3f4f6",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          Result: {result}
        </div>
      </div>
    </BaseNode>
  );
};