import { CareerGraph } from "../components/CareerGraph";
import { CompanyTargets } from "../components/CompanyTargets";
import { NextActions } from "../components/NextActions";
import { NodeDetails } from "../components/NodeDetails";
import { PathScore } from "../components/PathScore";
import { ProfileSnapshot } from "../components/ProfileSnapshot";
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
      <section className="heroCompact panel">
        <div>
          <p className="eyebrow">Target path</p>
          <h2>{target.title}</h2>
          <p>{target.summary}</p>
        </div>

        <TargetSelector
          onChangeTarget={onChangeTarget}
          target={target}
          targets={targets}
        />
      </section>

      <section className="dashboardGrid">
        <CareerGraph
          activeNodeId={activeNodeId}
          nodes={target.nodes}
          onSelectNode={onSelectNode}
        />

        <PathScore
          activeMoves={activeMoves}
          pathScore={pathScore}
          target={target}
        />

        <NodeDetails node={activeNode} />

        <ResumeGap gap={target.resumeGap} />

        <CompanyTargets companies={target.companies} />

        <NextActions moves={target.nextMoves} />

        <ProfileSnapshot target={target} />

        <Simulator selectedMoves={selectedMoves} onToggleMove={onToggleMove} />
      </section>
    </div>
  );
}