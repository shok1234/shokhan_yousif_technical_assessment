import { useState, useMemo } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || ""
  );

  // ----------------------------------
  // Extract variables from {{variable}}
  // ----------------------------------
  const variables = useMemo(() => {
    const regex = /{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g;

    const matches = [...currText.matchAll(regex)];

    return [...new Set(matches.map((m) => m[1]))];
  }, [currText]);

  // ----------------------------------
  // Dynamic handles
  // ----------------------------------
  const leftHandles = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    top: `${20 + index * 20}%`,
  }));

  // ----------------------------------
  // Dynamic node size
  // ----------------------------------
  const longestLine = Math.max(
    ...currText.split("\n").map((line) => line.length),
    20
  );

  const nodeWidth = Math.min(
    Math.max(250, longestLine * 8),
    600
  );

  const nodeHeight = Math.max(
    140,
    120 + currText.split("\n").length * 24
  );

  return (
    <BaseNode
      title="Text"
      leftHandles={leftHandles}
      rightHandles={[
        {
          id: `${id}-output`,
          top: "50%",
        },
      ]}
      style={{
        width: nodeWidth,
        minHeight: nodeHeight,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <label
          style={{
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          Text
        </label>

        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
           placeholder="Enter text with {{variable}}"
          style={{
            width: "100%",
            minHeight: nodeHeight - 90,
            resize: "none",
            padding: "8px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            fontSize: 13,
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            fontSize: 11,
            color: "#9ca3af",
          }}
        >
          Use variables like {"{{input}}"} or {"{{name}}"}
        </div>

        {variables.length > 0 && (
          <div
            style={{
              fontSize: 11,
              color: "#6366f1",
            }}
          >
            Variables: {variables.join(", ")}
          </div>
        )}
      </div>
    </BaseNode>
  );
};