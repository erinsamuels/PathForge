export function CareerGraph({ activeNodeId, nodes, onSelectNode }) {
  const positions = [
    { left: "12%", top: "64%" },
    { left: "36%", top: "36%" },
    { left: "60%", top: "64%" },
    { left: "84%", top: "36%" },
  ];

  return (
    <section className="panel careerGraphPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Career graph</p>
          <h2>Your route map</h2>
        </div>
        <span>Click a node</span>
      </div>

      <div className="careerGraph">
        <svg className="graphLines" viewBox="0 0 100 70" aria-hidden="true">
          <path d="M18 60 C25 48 29 40 35 38" />
          <path d="M41 38 C47 48 53 57 59 61" />
          <path d="M66 61 C72 50 78 41 83 38" />
          <path className="altLine" d="M40 35 C54 20 70 21 82 34" />
        </svg>

        {nodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            className={`graphNode ${node.type} ${
              node.id === activeNodeId ? "active" : ""
            }`}
            style={positions[index]}
            onClick={() => onSelectNode(node.id)}
          >
            <span>{index + 1}</span>
            <strong>{node.label}</strong>
            <small>{node.title}</small>
          </button>
        ))}
      </div>
    </section>
  );
}