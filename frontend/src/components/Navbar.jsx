import "./Navbar.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="logo">🧭</span>
        <span className="path">Path</span>
        <span className="forge">Forge</span>
      </div>

      <div className="links">
        <a href="/">Home</a>
        <a href="/">Career Paths</a>
        <a href="/">About</a>
      </div>

      <button className="loginButton">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;