import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      rightHandles={[
        {
          id: `${id}-value`,
          top: "55%",
        },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        {/* NAME */}
        <label style={{ fontSize: 11, color: "#6b7280" }}>
          Name
        </label>

        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            padding: "7px 8px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            outline: "none",
            fontSize: 13,
            transition: "0.2s",
          }}
          onFocus={(e) => {
            e.target.style.border = "1px solid #6366f1";
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid #d1d5db";
          }}
        />

        {/* TYPE */}
        <label style={{ fontSize: 11, color: "#6b7280" }}>
          Type
        </label>

        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            padding: "7px 8px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            fontSize: 13,
            background: "white",
            outline: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onFocus={(e) => {
            e.target.style.border = "1px solid #6366f1";
          }}
          onBlur={(e) => {
            e.target.style.border = "1px solid #d1d5db";
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>

      </div>
    </BaseNode>
  );
};