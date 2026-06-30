import { useMemo, useState } from "react";
import "./App.css";
import { AppLayout } from "./layout/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { simulatorMoves, targets } from "./data/pathData";

function App() {
  const [targetId, setTargetId] = useState(targets[0].id);
  const [activeNodeId, setActiveNodeId] = useState(targets[0].nodes[1].id);
  const [selectedMoves, setSelectedMoves] = useState([]);

  const target = targets.find((item) => item.id === targetId) ?? targets[0];

  const activeNode =
    target.nodes.find((node) => node.id === activeNodeId) ?? target.nodes[0];

  const activeMoves = useMemo(
    () => simulatorMoves.filter((move) => selectedMoves.includes(move.id)),
    [selectedMoves]
  );

  const pathScore = useMemo(() => {
    const boost = activeMoves.reduce((sum, move) => sum + move.impact, 0);
    return Math.min(target.score + boost, 100);
  }, [activeMoves, target.score]);

  function changeTarget(nextId) {
    const nextTarget = targets.find((item) => item.id === nextId) ?? targets[0];
    setTargetId(nextTarget.id);
    setActiveNodeId(nextTarget.nodes[1]?.id ?? nextTarget.nodes[0].id);
    setSelectedMoves([]);
  }

  function toggleMove(moveId) {
    setSelectedMoves((current) =>
      current.includes(moveId)
        ? current.filter((id) => id !== moveId)
        : [...current, moveId]
    );
  }

  return (
    <AppLayout>
      <Dashboard
        activeMoves={activeMoves}
        activeNode={activeNode}
        activeNodeId={activeNode.id}
        onChangeTarget={changeTarget}
        onSelectNode={setActiveNodeId}
        onToggleMove={toggleMove}
        pathScore={pathScore}
        selectedMoves={selectedMoves}
        target={target}
        targets={targets}
      />
    </AppLayout>
  );
}

export default App;