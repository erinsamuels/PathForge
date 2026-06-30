export function TargetSelector({ onChangeTarget, target, targets }) {
  return (
    <label className="targetSelector">
      <span>Target role</span>
      <select
        value={target.id}
        onChange={(event) => onChangeTarget(event.target.value)}
      >
        {targets.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </label>
  );
}