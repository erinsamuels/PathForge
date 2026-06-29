function Timeline() {
  const steps = [
    {
      title: "Virginia Tech",
      subtitle: "Mechanical Engineering",
      completed: true,
    },
    {
      title: "Hybrid Electric Vehicle Team",
      subtitle: "Leadership & Projects",
      completed: true,
    },
    {
      title: "DuPont",
      subtitle: "Mechanical Engineering Co-op",
      completed: true,
    },
    {
      title: "Recommended Next Step",
      subtitle: "Manufacturing Engineer • BorgWarner",
      completed: false,
    },
    {
      title: "Rivian",
      subtitle: "Dream Company",
      completed: false,
      destination: true,
    },
  ];

  return (
    <section className="timelineSection">
      <h2>Career Journey</h2>

      {steps.map((step, index) => (
        <div className="timelineItem" key={index}>
          <div
            className={
              step.destination
                ? "timelineCircle destination"
                : step.completed
                ? "timelineCircle complete"
                : "timelineCircle future"
            }
          />

          <div className="timelineContent">
            <h3>{step.title}</h3>
            <p>{step.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Timeline;