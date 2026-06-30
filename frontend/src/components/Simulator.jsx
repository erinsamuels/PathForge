import { useState } from "react";
import { simulatorMoves } from "../data/pathData";
import { Check, TrendingUp } from "lucide-react";

export function Simulator({ selectedMoves, onToggleMove }) {
  const [springCard, setSpringCard] = useState(null);

  const totalBoost = selectedMoves.reduce((sum, id) => {
    const move = simulatorMoves.find((m) => m.id === id);
    return sum + (move?.impact ?? 0);
  }, 0);

  function handleToggle(moveId) {
    onToggleMove(moveId);
    setSpringCard(moveId);
    setTimeout(() => setSpringCard(null), 460);
  }

  return (
    <section className="panel">
      <div className="panelHeader">
        <div className="panelHeaderLeft">
          <p className="eyebrow">Simulator</p>
          <h2>What if I…</h2>
        </div>
        <div className="panelBadge">
          <TrendingUp size={11} />
          Animates path score
        </div>
      </div>

      {totalBoost > 0 && (
        <div className="simBoostRow">
          <span className="simBoostLabel">
            {selectedMoves.length} move{selectedMoves.length !== 1 ? "s" : ""} selected · projected boost
          </span>
          <span className="simBoostNum">+{totalBoost} pts</span>
        </div>
      )}

      <div className="simGrid">
        {simulatorMoves.map((move) => {
          const selected = selectedMoves.includes(move.id);
          const isSpring = springCard === move.id;

          return (
            <button
              key={move.id}
              type="button"
              className={`simCard ${selected ? "active" : ""} ${isSpring ? "spring" : ""}`}
              onClick={() => handleToggle(move.id)}
            >
              <div className="simCheckmark">
                <Check size={12} />
              </div>

              <div>
                <div className="simCardTitle">{move.title}</div>
                <p className="simCardDesc">{move.detail}</p>
              </div>

              <div className="simCardImpact">
                <TrendingUp size={13} />
                +{move.impact} score
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
