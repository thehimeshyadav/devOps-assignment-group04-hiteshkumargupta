import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🎬 <span>Movie Recommendation</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Recommendations</a>
        <a href="#">Favorites</a>
        <a href="#">Watchlist</a>
      </div>
    </nav>
  );
}

export default Navbar;