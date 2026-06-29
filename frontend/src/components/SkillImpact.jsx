import "./SkillImpact.css";

function SkillImpact() {
  const skills = [
    { name: "DFMEA", impact: 4 },
    { name: "APQP", impact: 3 },
    { name: "Battery Manufacturing", impact: 3 },
  ];

  return (
    <section className="skillImpact">
      <div className="sectionHeader">
        <p className="eyebrow">Highest ROI Skills</p>
        <h2>Small improvements with high career impact.</h2>
      </div>

      <div className="impactPanel">
        {skills.map((skill) => (
          <div className="skillRow" key={skill.name}>
            <div className="skillInfo">
              <strong>{skill.name}</strong>
              <span>+{skill.impact} Path Score</span>
            </div>

            <div className="barTrack">
              <div
                className="barFill"
                style={{ width: `${skill.impact * 20}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillImpact;