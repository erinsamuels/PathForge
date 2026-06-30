export function NodeDetails({ node }) {
  return (
    <section className="panel nodeDetails">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Selected node</p>
          <h2>{node.label}</h2>
        </div>
        <span>{node.type}</span>
      </div>

      <div className="nodeHero">
        <div>
          <h3>{node.title}</h3>
          <p>{node.detail}</p>
        </div>

        <div className="nodeMatch">
          <strong>{node.match}%</strong>
          <span>step fit</span>
        </div>
      </div>

      <div className="detailBlock">
        <strong>Skills gained</strong>
        <div className="pillRow">
          {node.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="detailBlock">
        <strong>Common exits</strong>
        <div className="exitList">
          {node.exits.map((exit) => (
            <span key={exit}>{exit}</span>
          ))}
        </div>
      </div>

      <div className="actionBox">
        <strong>Next action</strong>
        <p>{node.action}</p>
      </div>
    </section>
  );
}