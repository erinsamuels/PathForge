export function PathScore({ activeMoves, pathScore, target }) {
  const boost = pathScore - target.score;

  return (
    <aside className="panel pathScore">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Path score</p>
          <h2>Match strength</h2>
        </div>
      </div>

      <div className="scoreValue">
        <strong>{pathScore}</strong>
        <span>{boost > 0 ? `+${boost} simulated` : "Current baseline"}</span>
      </div>

      <div className="metrics">
        {target.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <div>
              <span>{metric.label}</span>
              <strong>{metric.value}%</strong>
            </div>
            <div className="bar">
              <span style={{ width: `${metric.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      {activeMoves.length > 0 && (
        <div className="pillRow">
          {activeMoves.map((move) => (
            <span key={move.id}>
              +{move.impact} {move.title}
            </span>
          ))}
        </div>
      )}
    </aside>
  );
}