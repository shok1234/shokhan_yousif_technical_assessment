import { useState, useMemo } from "react";
import { BaseNode } from "./BaseNode";

export const TransformNode = () => {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return {
      upper: text.toUpperCase(),
      lower: text.toLowerCase(),
      length: text.length,
    };
  }, [text]);

  return (
    <BaseNode>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          style={{ padding: 6, border: "1px solid #ccc", borderRadius: 6 }}
        />

        <div style={{ fontSize: 12 }}>
          <div>Upper: {output.upper}</div>
          <div>Lower: {output.lower}</div>
          <div>Length: {output.length}</div>
        </div>
      </div>
    </BaseNode>
  );
};