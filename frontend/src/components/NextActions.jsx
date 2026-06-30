import { useState } from "react";
import { Check } from "lucide-react";

export function NextActions({ moves }) {
  const [checked, setChecked] = useState(new Set());

  function toggle(i) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const doneCount = checked.size;

  return (
    <section className="panel">
      <div className="panelHeader">
        <div className="panelHeaderLeft">
          <p className="eyebrow">Recommended</p>
          <h2>Priority actions</h2>
        </div>
        <div className={`panelBadge ${doneCount > 0 ? "panelBadge-sage" : "panelBadge-gold"}`}>
          {doneCount > 0 ? `${doneCount}/${moves.length} done` : `${moves.length} moves`}
        </div>
      </div>

      <div className="actionList">
        {moves.map((move, index) => {
          const done = checked.has(index);
          return (
            <article
              key={move}
              className={`actionItem ${done ? "checked" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <div className="actionNum">{index + 1}</div>
              <div className="actionCheckRow">
                <p className="actionText">{move}</p>
                <div className="actionCheckBtn">
                  {done && <Check size={12} />}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
