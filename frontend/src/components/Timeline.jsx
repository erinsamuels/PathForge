import "./Timeline.css";

function Timeline() {
  const steps = [
    {
      title: "Virginia Tech",
      subtitle: "Mechanical Engineering",
      status: "complete",
    },
    {
      title: "HEVT",
      subtitle: "Vehicle team experience",
      status: "complete",
    },
    {
      title: "DuPont",
      subtitle: "Manufacturing co-op",
      status: "complete",
    },
    {
      title: "BorgWarner",
      subtitle: "Recommended next step",
      status: "recommended",
    },
    {
      title: "Rivian",
      subtitle: "Dream destination",
      status: "destination",
    },
  ];

  return (
    <section className="journeySection">
      <div className="sectionHeader">
        <p className="eyebrow">Career Journey</p>
        <h2>Your current path and recommended route forward.</h2>
      </div>

      <div className="journeyCard">
        {steps.map((step, index) => (
          <div className="journeyItem" key={step.title}>
            <div className={`journeyNode ${step.status}`}>
              {step.status === "destination" ? "★" : index + 1}
            </div>

            {index !== steps.length - 1 && <div className="journeyLine" />}

            <div className="journeyText">
              <h3>{step.title}</h3>
              <p>{step.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;