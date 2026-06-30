import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Career Navigation System</p>

        <h1>Find the fastest path to your dream company.</h1>

        <p className="subtitle">
          Upload your resume, choose your destination, and discover the proven
          career paths engineers have taken to reach companies like Rivian,
          Tesla, SpaceX, and more.
        </p>

        <div className="actions">
          <button className="primaryButton">Analyze My Career</button>
          <button className="secondaryButton">Explore Career Paths</button>
        </div>
      </div>

      <div className="missionPanel">
        <div className="panelHeader">
          <span>Mission Setup</span>
          <strong>Step 1 of 2</strong>
        </div>

        <div className="fieldGroup">
          <label>Destination</label>
          <select>
            <option>Rivian</option>
            <option>Tesla</option>
            <option>Lucid</option>
            <option>SpaceX</option>
            <option>Apple</option>
            <option>BorgWarner</option>
          </select>
        </div>

        <div className="fieldGroup">
          <label>Resume</label>
          <div className="uploadBox">
            <span className="uploadIcon">↑</span>
            <div>
              <strong>Upload Resume</strong>
              <p>PDF, DOCX, or TXT</p>
            </div>
          </div>
        </div>

        <div className="previewCard">
          <div>
            <span>Path Score Preview</span>
            <p>Early EV manufacturing alignment</p>
          </div>
          <strong>88</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;