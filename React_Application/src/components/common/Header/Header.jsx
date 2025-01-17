
import "./Header.css";

export default function Header() {
  return (
    <div>
    <header className="Header">
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/">Articles</a>
          <a href="/">About</a>
          <button>Logout</button>
        </nav>
      </header>
      </div>
  );
}
