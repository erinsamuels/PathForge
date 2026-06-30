export function ProfileSnapshot({ target }) {
  return (
    <section className="panel profileSnapshot">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Profile snapshot</p>
          <h2>Current story</h2>
        </div>
      </div>

      <div className="snapshotGrid">
        <article>
          <span>Current role</span>
          <strong>{target.current}</strong>
        </article>
        <article>
          <span>Target company</span>
          <strong>{target.company}</strong>
        </article>
        <article>
          <span>Target function</span>
          <strong>{target.role}</strong>
        </article>
      </div>
    </section>
  );
}