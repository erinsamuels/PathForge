import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

export function TargetSelector({ onChangeTarget, target, targets }) {
  const [open, setOpen] = useState(false);

  function select(id) {
    onChangeTarget(id);
    setOpen(false);
  }

  return (
    <div className="targetSelector" style={{ position: "relative" }}>
      <div className="targetSelectorLabel">Choose target path</div>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          background: "rgba(5,10,7,0.7)",
          border: `1px solid ${open ? "rgba(247,216,157,0.45)" : "var(--border-gold)"}`,
          borderRadius: "var(--r-lg)",
          color: "var(--text)",
          fontWeight: 700,
          fontSize: "0.875rem",
          padding: "12px 14px",
          cursor: "pointer",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxShadow: open ? "0 0 0 3px var(--gold-ring)" : "none",
          textAlign: "left",
        }}
      >
        <span>{target.title}</span>
        <ChevronDown
          size={15}
          style={{
            color: "var(--gold)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 6px)",
          left: 0,
          right: 0,
          zIndex: 50,
          borderRadius: "var(--r-lg)",
          background: "rgba(8,16,10,0.96)",
          border: "1px solid var(--border-gold)",
          backdropFilter: "blur(20px)",
          boxShadow: "var(--sh-lg)",
          overflow: "hidden",
          animation: "scaleIn 0.15s var(--ease) both",
          transformOrigin: "top center",
        }}>
          {targets.map((item) => {
            const isActive = item.id === target.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => select(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "12px 14px",
                  background: isActive ? "var(--gold-glow)" : "transparent",
                  borderBottom: "1px solid var(--border)",
                  color: isActive ? "var(--text)" : "var(--text-2)",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: "0.84rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--s2)";
                    e.currentTarget.style.color = "var(--text)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-2)";
                  }
                }}
              >
                <div>
                  <div style={{ marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-3)", fontWeight: 500 }}>
                    {item.summary.slice(0, 56)}…
                  </div>
                </div>
                {isActive && <Check size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
