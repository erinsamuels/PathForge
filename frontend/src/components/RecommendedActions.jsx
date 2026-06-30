import "./RecommendedActions.css";

function RecommendedActions() {
  const actions = [
    {
      title: "Learn DFMEA fundamentals",
      reason: "Highest-impact skill gap for EV manufacturing roles.",
      impact: "+4 Path Score",
    },
    {
      title: "Explore Tier 1 suppliers",
      reason: "Common stepping stone before Rivian and Tesla roles.",
      impact: "+3 Path Score",
    },
    {
      title: "Connect with EV manufacturing alumni",
      reason: "Improves access to role-specific advice and referrals.",
      impact: "+2 Path Score",
    },
  ];

  return (
    <section className="actionsSection">
      <div className="sectionHeader">
        <p className="eyebrow">Recommended Actions</p>
        <h2>Focus on the next moves with the highest expected return.</h2>
      </div>

      <div className="actionsGrid">
        {actions.map((action) => (
          <article className="actionCard" key={action.title}>
            <div className="actionImpact">{action.impact}</div>
            <h3>{action.title}</h3>
            <p>{action.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecommendedActions;