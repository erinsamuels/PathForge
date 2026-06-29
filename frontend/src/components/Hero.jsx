import "./Hero.css";

function Hero() {
  return (
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
  );
}

export default Hero;