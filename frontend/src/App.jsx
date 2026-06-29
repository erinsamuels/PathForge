import "./App.css";

function App() {
  return (
    <main className="app">
      <nav className="nav">
        <div className="brand">
          <span className="logo">🧭</span>
          <span>Path</span>
          <strong>Forge</strong>
        </div>

        <div className="navLinks">
          <a>Dashboard</a>
          <a>Simulator</a>
          <a>Insights</a>
          <a>Network</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Career Navigation System</p>
          <h1>Navigate your career. Not just your next job.</h1>
          <p className="subtitle">
            Upload your resume, choose your destination, and discover the
            proven career paths that can get you there.
          </p>

          <div className="actions">
            <button className="primaryButton">Analyze My Career</button>
            <button className="secondaryButton">Explore Paths</button>
          </div>
        </div>

        <div className="panel">
          <label>Dream Company</label>
          <select>
            <option>Rivian</option>
            <option>Tesla</option>
            <option>Lucid</option>
            <option>SpaceX</option>
            <option>Apple</option>
            <option>BorgWarner</option>
          </select>

          <label>Upload Resume</label>
          <div className="uploadBox">Choose File — PDF, DOCX, or TXT</div>

          <div className="scorePreview">
            <span>Trajectory Preview</span>
            <strong>88</strong>
            <p>Strong early EV manufacturing alignment</p>
          </div>
        </div>
      </section>

      <section className="dashboard">
        <div className="sectionHeader">
          <p className="eyebrow">Your Path Dashboard</p>
          <h2>Turn your current experience into a clear next move.</h2>
        </div>

        <div className="cards">
          <article className="card">
            <p className="cardLabel">Trajectory</p>
            <div className="metric">88</div>
            <h3>Strong trajectory</h3>
            <p>
              You are aligned with early EV manufacturing paths based on your
              current experience.
            </p>
          </article>

          <article className="card">
            <p className="cardLabel">Best Career Match</p>
            <h3>Sarah Chen</h3>
            <p className="greenText">Manufacturing Engineer</p>
            <span className="pill">91% Match</span>
            <p>
              Shared manufacturing, CAD, and root-cause background.
            </p>
          </article>

          <article className="card">
            <p className="cardLabel">Recommended Next Step</p>
            <h3>BorgWarner</h3>
            <p className="greenText">Manufacturing Engineering</p>
            <span className="pill">74% Confidence</span>
            <p>
              Strong stepping-stone toward EV OEM roles like Rivian.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;