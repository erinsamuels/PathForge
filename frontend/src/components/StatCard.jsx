import "./StatCard.css";

function StatCard({
  label,
  title,
  subtitle,
  badge,
  metric,
  children,
}) {
  return (
    <article className="statCard">
      <p className="statLabel">{label}</p>

      {metric && <div className="statMetric">{metric}</div>}

      <h3>{title}</h3>

      {subtitle && (
        <p className="statSubtitle">
          {subtitle}
        </p>
      )}

      {badge && (
        <span className="statBadge">
          {badge}
        </span>
      )}

      <div className="statContent">
        {children}
      </div>
    </article>
  );
}

export default StatCard;