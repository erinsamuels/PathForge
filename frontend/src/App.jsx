import "./App.css";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Career Navigation System</p>

          <h1>Find the fastest path to your dream company.</h1>

          <p className="subtitle">
            Upload your resume, choose your destination, and discover the
            proven career paths engineers have taken to reach companies like
            Rivian, Tesla, SpaceX, and more.
          </p>

          <div className="actions">
            <button className="primaryButton">Analyze My Career</button>
            <button className="secondaryButton">Explore Career Paths</button>
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
            <span>Path Score Preview</span>
            <strong>88</strong>
            <p>Strong alignment with early EV manufacturing career paths.</p>
          </div>
        </div>
      </section>

      <section className="dashboard">
        <div className="sectionHeader">
          <p className="eyebrow">Your Career Snapshot</p>
          <h2>Turn your experience into a clear next step.</h2>
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

      <Timeline />
    </main>
  );
}

export default App;