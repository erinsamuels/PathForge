import "./Dashboard.css";
import StatCard from "./StatCard";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="sectionHeader">
        <p className="eyebrow">Your Career Snapshot</p>

        <h2>
          Turn your experience into a clear next step.
        </h2>
      </div>

      <div className="cards">
        <StatCard
          label="Path Score"
          metric="88"
          title="Strong Trajectory"
        >
          Your current experiences align well with successful EV
          manufacturing career paths.
        </StatCard>

        <StatCard
          label="Best Career Match"
          title="Sarah Chen"
          subtitle="Manufacturing Engineer"
          badge="91% Match"
        >
          Similar education, manufacturing experience, and technical
          leadership.
        </StatCard>

        <StatCard
          label="Highest ROI Move"
          title="BorgWarner"
          subtitle="Manufacturing Engineer"
          badge="+4 Path Score"
        >
          The most common stepping stone toward Rivian among similar
          engineers.
        </StatCard>
      </div>
    </section>
  );
}

export default Dashboard;