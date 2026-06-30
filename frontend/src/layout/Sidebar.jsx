const navItems = ["Dashboard", "Career Map", "Resume", "Network", "Companies"];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span>PF</span>
        <strong>PathForge</strong>
      </div>

      <nav className="sideNav">
        {navItems.map((item, index) => (
          <a className={index === 0 ? "active" : ""} href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>

      <div className="sidebarNote">
        <span>Current focus</span>
        <strong>EV career path</strong>
      </div>
    </aside>
  );
}