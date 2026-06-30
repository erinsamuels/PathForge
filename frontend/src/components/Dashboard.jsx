import { useState } from "react";
import "./Dashboard.css";
import PathScoreRing from "./PathScoreRing";

function Dashboard() {
  const nextSteps = {
    BorgWarner: {
      role: "Manufacturing Engineer",
      score: 92,
      impact: "+4 Path Score",
      confidence: "74% Confidence",
      reason:
        "Strong Tier 1 supplier route that builds EV-relevant manufacturing experience.",
    },
    Bosch: {
      role: "Process Engineer",
      score: 91,
      impact: "+3 Path Score",
      confidence: "70% Confidence",
      reason:
        "Excellent supplier-side manufacturing path with strong systems and process exposure.",
    },
    Cummins: {
      role: "Manufacturing Engineer",
      score: 90,
      impact: "+2 Path Score",
      confidence: "67% Confidence",
      reason:
        "Strong manufacturing foundation with transferable process improvement experience.",
    },
    Tesla: {
      role: "Manufacturing Intern",
      score: 93,
      impact: "+5 Path Score",
      confidence: "72% Confidence",
      reason:
        "Direct EV manufacturing experience, but more competitive and less predictable as a next step.",
    },
  };

  const [selectedStep, setSelectedStep] = useState("BorgWarner");
  const step = nextSteps[selectedStep];

  const journey = [
    ["Virginia Tech", "Mechanical Engineering"],
    ["HEVT", "Vehicle team experience"],
    ["DuPont", "Manufacturing co-op"],
    [selectedStep, "Simulated next step"],
    ["Rivian", "Dream destination"],
  ];

  const skills = [
    ["DFMEA", 4, 90],
    ["APQP", 3, 72],
    ["Battery Manufacturing", 3, 68],
  ];

  return (
    <section className="dashboard">
      <div className="sectionHeader">
        <p className="eyebrow">Your Career Snapshot</p>
        <h2>Turn your experience into a clear next step.</h2>
      </div>

      <div className="simulatorBar">
        <div>
          <p className="cardLabel">What if your next move was...</p>
          <h3>{selectedStep}</h3>
        </div>

        <select
          className="simulatorSelect"
          value={selectedStep}
          onChange={(event) => setSelectedStep(event.target.value)}
        >
          {Object.keys(nextSteps).map((company) => (
            <option key={company}>{company}</option>
          ))}
        </select>
      </div>

      <div className="summaryGrid">
        <article className="scoreCard">
          <p className="cardLabel">Projected Path Score</p>
          <PathScoreRing score={step.score} label="Projected trajectory" />
        </article>

        <article className="summaryCard">
          <p className="cardLabel">Best Career Match</p>
          <h3>Sarah Chen</h3>
          <p className="greenText">Manufacturing Engineer</p>
          <span className="pill">91% Match</span>
          <p>Similar education, manufacturing experience, and technical leadership.</p>
        </article>

        <article className="summaryCard">
          <p className="cardLabel">Highest ROI Move</p>
          <h3>{selectedStep}</h3>
          <p className="greenText">{step.role}</p>
          <span className="pill">{step.impact}</span>
          <p>{step.reason}</p>
        </article>
      </div>

      <div className="analyticsCard">
        <div>
          <p className="cardLabel">Career Journey</p>

          <div className="journeyList">
            {journey.map(([title, subtitle], index) => (
              <div className="journeyRow" key={`${title}-${subtitle}`}>
                <div className={index === journey.length - 1 ? "node destination" : "node"}>
                  {index === journey.length - 1 ? "★" : index + 1}
                </div>

                <div>
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="cardLabel">Highest ROI Skills</p>

          <div className="skillList">
            {skills.map(([name, impact, width]) => (
              <div className="skillItem" key={name}>
                <div className="skillHeader">
                  <strong>{name}</strong>
                  <span>+{impact} Path Score</span>
                </div>

                <div className="skillTrack">
                  <div className="skillFill" style={{ width: `${width}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <article className="whyCard">
        <p className="cardLabel">Why this recommendation</p>
        <h3>{selectedStep} improves your route toward Rivian.</h3>
        <p>
          {step.reason} PathForge estimates this route at {step.confidence}
          based on overlap with manufacturing-focused EV career paths.
        </p>
      </article>
    </section>
  );
}

export default Dashboard;