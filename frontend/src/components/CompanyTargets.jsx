export function CompanyTargets({ companies }) {
  return (
    <section className="panel companyTargets">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Company targets</p>
          <h2>Where to aim next</h2>
        </div>
        <span>{companies.length} targets</span>
      </div>

      <div className="companyGrid">
        {companies.map((company) => (
          <article className="companyCard" key={company.name}>
            <div className="companyLogo">{company.name.slice(0, 2)}</div>

            <div>
              <h3>{company.name}</h3>
              <p>{company.fit}</p>
            </div>

            <div className="companyMeta">
              <strong>Search roles</strong>
              <span>{company.roleType}</span>
            </div>

            <div className="companyMeta">
              <strong>Intro angle</strong>
              <span>{company.introAngle}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}