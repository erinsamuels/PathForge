import { useEffect, useState } from "react";

const COLORS = [
  { fill: "linear-gradient(135deg, #75A37B, #B8D6AC)" },
  { fill: "linear-gradient(135deg, #C38643, #F7D89D)" },
  { fill: "linear-gradient(135deg, #3D6E45, #75A37B)" },
  { fill: "linear-gradient(135deg, #8B5A1A, #C38643)" },
  { fill: "linear-gradient(135deg, #B8D6AC, #F7D89D)" },
];

export function PathDNA({ target }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(id);
  }, [target.id]);

  useEffect(() => {
    setAnimated(false);
    const id = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(id);
  }, [target.id]);

  // Sort metrics descending for visual impact
  const sorted = [...target.metrics].sort((a, b) => b.value - a.value);

  return (
    <section className="panel">
      <div className="panelHeader">
        <div className="panelHeaderLeft">
          <p className="eyebrow">Path DNA</p>
          <h2>Skill breakdown</h2>
        </div>
        <div className="panelBadge panelBadge-gold">{target.score} overall</div>
      </div>

      {/* Horizontal stacked bar */}
      <div style={{
        height: 12,
        borderRadius: "var(--r-full)",
        overflow: "hidden",
        display: "flex",
        marginBottom: 20,
        background: "var(--s2)",
      }}>
        {sorted.map((metric, i) => (
          <div
            key={metric.label}
            title={`${metric.label}: ${metric.value}%`}
            style={{
              flex: metric.value,
              background: COLORS[i % COLORS.length].fill,
              transition: `flex 1s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s`,
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "grid", gap: 10 }}>
        {sorted.map((metric, i) => (
          <div key={metric.label} style={{ display: "grid", gap: 6 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: 3,
                  background: COLORS[i % COLORS.length].fill,
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "0.8rem", color: "var(--text-2)", fontWeight: 600 }}>
                  {metric.label}
                </span>
              </div>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text)" }}>
                {metric.value}%
              </span>
            </div>
            <div style={{
              height: 5, borderRadius: "var(--r-full)",
              background: "var(--s2)", overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: animated ? `${metric.value}%` : "0%",
                borderRadius: "inherit",
                background: COLORS[i % COLORS.length].fill,
                transition: `width 0.9s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.07}s`,
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
