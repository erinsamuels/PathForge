import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brandMark">⌁</div>
        <div>
          <span className="path">Path</span>
          <span className="forge">Forge</span>
        </div>
      </div>

      <button className="loginButton">Sign In</button>
    </nav>
  );
}

export default Navbar;