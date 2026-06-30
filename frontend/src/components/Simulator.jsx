import { simulatorMoves } from "../data/pathData";

export function Simulator({ selectedMoves, onToggleMove }) {
  return (
    <section className="panel simulator">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Simulator</p>
          <h2>Test a career move</h2>
        </div>
        <span>Updates score</span>
      </div>

      <div className="simGrid">
        {simulatorMoves.map((move) => {
          const selected = selectedMoves.includes(move.id);

          return (
            <button
              className={selected ? "simCard active" : "simCard"}
              key={move.id}
              onClick={() => onToggleMove(move.id)}
              type="button"
            >
              <div>
                <strong>{move.title}</strong>
                <p>{move.detail}</p>
              </div>
              <span>+{move.impact}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}