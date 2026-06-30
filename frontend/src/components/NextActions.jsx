export function NextActions({ moves }) {
  return (
    <section className="panel nextActions">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Next best moves</p>
          <h2>Priority actions</h2>
        </div>
      </div>

      <div className="actionList">
        {moves.map((move, index) => (
          <article key={move}>
            <span>{index + 1}</span>
            <p>{move}</p>
          </article>
        ))}
      </div>
    </section>
  );
}