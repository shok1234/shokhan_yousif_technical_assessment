import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      leftHandles={[
        { id: `${id}-system`, top: "30%" },
        { id: `${id}-prompt`, top: "70%" },
      ]}
      rightHandles={[
        { id: `${id}-response`, top: "50%" },
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div
          style={{
            fontSize: 13,
            color: "#374151",
            lineHeight: "1.4",
          }}
        >
          Large Language Model Node
        </div>

        <div style={{ fontSize: 11, color: "#9ca3af" }}>
          Processes system + prompt inputs and returns a response
        </div>
      </div>
    </BaseNode>
  );
};