import { CareerGraph } from "../components/CareerGraph";
import { CompanyTargets } from "../components/CompanyTargets";
import { ConnectionTargets } from "../components/ConnectionTargets";
import { InsightPanel } from "../components/InsightPanel";
import { NextActions } from "../components/NextActions";
import { NodeDetails } from "../components/NodeDetails";
import { PathDNA } from "../components/PathDNA";
import { PathScore } from "../components/PathScore";
import { ResumeGap } from "../components/ResumeGap";
import { Simulator } from "../components/Simulator";
import { TargetSelector } from "../components/TargetSelector";

export function Dashboard({
  activeMoves,
  activeNode,
  activeNodeId,
  onChangeTarget,
  onSelectNode,
  onToggleMove,
  pathScore,
  selectedMoves,
  target,
  targets,
}) {
  return (
    <div className="dashboard">

      {/* Hero */}
      <section className="panel dashHero">
        <div className="dashHeroContent">
          <p className="eyebrow">Target path</p>
          <h2 className="dashHeroTitle">
            Your path to{" "}
            <em>{target.role}</em>{" "}
            at {target.company}
          </h2>
          <p className="dashHeroSummary">{target.summary}</p>

          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              borderRadius: "var(--r-full)", padding: "6px 13px",
              background: "var(--gold-glow)", border: "1px solid var(--border-gold)",
              fontSize: "0.78rem", fontWeight: 800, color: "var(--gold)",
            }}>
              {pathScore}/100 path score
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              borderRadius: "var(--r-full)", padding: "6px 13px",
              background: "var(--s2)", border: "1px solid var(--border)",
              fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)",
            }}>
              {target.nodes.length} steps mapped
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              borderRadius: "var(--r-full)", padding: "6px 13px",
              background: "var(--sage-glow)", border: "1px solid var(--border-sage)",
              fontSize: "0.78rem", fontWeight: 700, color: "var(--sage-lt)",
            }}>
              {target.companies.length} target companies
            </div>
          </div>
        </div>

        <TargetSelector
          onChangeTarget={onChangeTarget}
          target={target}
          targets={targets}
        />
      </section>

      {/* Google Maps layout: graph + scrollable content on left, sticky workspace on right */}
      <div className="dashMain">

        {/* Top-left: Career Graph — the central interactive engine */}
        <div className="dashGraph">
          <CareerGraph
            activeNodeId={activeNodeId}
            nodes={target.nodes}
            onSelectNode={onSelectNode}
            target={target}
          />
        </div>

        {/* Bottom-left: content that scrolls while workspace stays visible */}
        <div className="dashContent">
          <div className="insightDnaRow">
            <InsightPanel target={target} activeNode={activeNode} pathScore={pathScore} />
            <PathDNA target={target} />
          </div>

          <NextActions moves={target.nextMoves} />

          <ResumeGap gap={target.resumeGap} />

          <CompanyTargets companies={target.companies} />

          <ConnectionTargets connections={target.connections} />

          <Simulator selectedMoves={selectedMoves} onToggleMove={onToggleMove} />
        </div>

        {/* Right: sticky workspace — reacts to node selection with slide-in */}
        <aside className="workspaceCol">
          <div key={activeNodeId} className="workspaceContent">
            <NodeDetails node={activeNode} />
          </div>
          <PathScore
            activeMoves={activeMoves}
            pathScore={pathScore}
            target={target}
          />
        </aside>
      </div>

    </div>
  );
}
