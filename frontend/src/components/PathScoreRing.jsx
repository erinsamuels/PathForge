import "./PathScoreRing.css";

function PathScoreRing({ score = 88, label = "Strong Trajectory" }) {
  const progress = Math.min(Math.max(score, 0), 100);

  return (
    <div className="pathScoreRing">
      <div
        className="ring"
        style={{
          background: `conic-gradient(#22c55e ${progress * 3.6}deg, #e2e8f0 0deg)`,
        }}
      >
        <div className="ringInner">
          <strong>{score}</strong>
          <span>/100</span>
        </div>
      </div>

      <p>{label}</p>
    </div>
  );
}

export default PathScoreRing;