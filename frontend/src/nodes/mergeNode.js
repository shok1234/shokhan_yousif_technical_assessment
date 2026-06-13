import { useState, useMemo } from "react";
import { BaseNode } from "./BaseNode";

export const MergeNode = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const merged = useMemo(() => {
    return `${a}${b}`;
  }, [a, b]);

  return (
    <BaseNode>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="A"
          style={{ padding: 6, border: "1px solid #ccc", borderRadius: 6 }}
        />

        <input
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="B"
          style={{ padding: 6, border: "1px solid #ccc", borderRadius: 6 }}
        />

        <div
          style={{
            padding: 6,
            background: "#f3f4f6",
            borderRadius: 6,
          }}
        >
          Merged: {merged || "empty"}
        </div>
      </div>
    </BaseNode>
  );
};