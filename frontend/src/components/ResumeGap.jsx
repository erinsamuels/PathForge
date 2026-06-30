export function ResumeGap({ gap }) {
  return (
    <section className="panel resumeGap">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Resume gap</p>
          <h2>Make the story clearer</h2>
        </div>
        <span>{gap.readiness}% ready</span>
      </div>

      <div className="readinessBar">
        <span style={{ width: `${gap.readiness}%` }} />
      </div>

      <div className="gapFocus">
        <strong>Focus</strong>
        <p>{gap.focus}</p>
      </div>

      <div className="detailBlock">
        <strong>Missing keywords</strong>
        <div className="pillRow">
          {gap.missingKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </div>

      <div className="bulletUpgrades">
        {gap.bulletUpgrades.map((bullet) => (
          <article key={bullet.before}>
            <p className="before">{bullet.before}</p>
            <p className="after">{bullet.after}</p>
          </article>
        ))}
      </div>
    </section>
  );
}