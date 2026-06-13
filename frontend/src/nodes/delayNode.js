import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = () => {
  const [ms, setMs] = useState(1000);
  const [status, setStatus] = useState("Idle");

  useEffect(() => {
    setStatus("Waiting...");

    const timer = setTimeout(() => {
      setStatus(`Finished after ${ms}ms`);
    }, Number(ms));

    return () => clearTimeout(timer);
  }, [ms]);

  return (
    <BaseNode title="Delay Node">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          type="number"
          value={ms}
          onChange={(e) => setMs(e.target.value)}
          style={{
            padding: 6,
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        />

        <div
          style={{
            padding: 6,
            background: "#f3f4f6",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          {status}
          
        </div>
      </div>
    </BaseNode>
  );
};