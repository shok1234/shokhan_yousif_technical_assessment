import { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const RandomNode = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BaseNode>
      <div style={{ textAlign: "center" }}>
        <div>🎲 Live Random Value</div>

        <div
          style={{
            marginTop: 8,
            padding: 8,
            background: "#f3f4f6",
            borderRadius: 6,
            fontWeight: "bold",
          }}
        >
          {value}
        </div>
      </div>
    </BaseNode>
  );
};