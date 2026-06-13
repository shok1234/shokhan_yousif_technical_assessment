import { Handle, Position } from "reactflow";
import { nodeStyle } from "./nodeStyles";

export const BaseNode = ({
  title,
  leftHandles = [],
  rightHandles = [],
  children,
  style = {},
}) => {
  return (
    <div
      style={{
        ...nodeStyle,
        ...style,
        transition: "0.2s",
        cursor: "pointer",
      }}
    >
      {/* TITLE */}
      <div style={{ fontWeight: "bold", marginBottom: 8 }}>
        {title}
      </div>

      {/* CHILD CONTENT */}
      <div>{children}</div>

      {/* LEFT HANDLES */}
      {leftHandles.map((h) => (
        <Handle
          key={h.id}
          type="target"
          position={Position.Left}
          id={h.id}
          style={{ top: h.top, background: "#6366f1" }}
        />
      ))}

      {/* RIGHT HANDLES */}
      {rightHandles.map((h) => (
        <Handle
          key={h.id}
          type="source"
          position={Position.Right}
          id={h.id}
          style={{ top: h.top, background: "#10b981" }}
        />
      ))}
    </div>
  );
};