import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://frontend-technical-assessment.fly.dev/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const data = await response.json();

      alert(
        `📊 Pipeline Result\n` +
        `-------------------\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `DAG: ${data.is_dag}`
      );
    } catch (err) {
      console.error(err);
      alert("Backend connection failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 22px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, #4f46e5, #6366f1)",
          color: "white",
          fontWeight: "600",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(79,70,229,0.3)",
          transition: "0.2s ease-in-out",
        }}
        onMouseOver={(e) =>
          (e.target.style.transform = "scale(1.03)")
        }
        onMouseOut={(e) =>
          (e.target.style.transform = "scale(1)")
        }
      >
        Submit Pipeline
      </button>
    </div>
  );
};