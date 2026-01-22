import { Link } from "react-router-dom";
import { useAuth } from "../context/userContext";

const NavBar = () => {
  const gradientTextStyle = {
    fontSize: "20px",
    background: "radial-gradient(circle, red, yellow)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const { user, setUser } = useAuth();

  const getAdminAccess = () => {
    setUser(user ? false : true);
  };

  return (
    <nav className="navbar navbar-expand-lg py-4 bg-primary navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={gradientTextStyle}>
          Shiksha Sarthi
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button onClick={() => getAdminAccess()} className="nav-link">
                Admin Access
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/epaper">
                E-Paper
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
