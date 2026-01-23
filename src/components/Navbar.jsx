import { Link } from "react-router-dom";
import { useAuth } from "../context/userContext";
import { useState } from "react";

const NavBar = () => {

  const [count, setCount] = useState(1);

  const gradientTextStyle = {
    fontSize: "20px",
    background: "radial-gradient(circle, red, yellow)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const { user, setUser } = useAuth();

  // const getAdminAccess = () => {
    
  // };
  
  const increaseCount = () => {
    setCount(prev => prev+1);
    console.log("count: ",count);
    if(count >= 10){
      setUser(user ? false : true);
      setCount(1);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg py-4 bg-primary navbar-dark">
      <div className="container-fluid">
        <button onClick={() => increaseCount()} className="navbar-brand border-0 d-flex align-items-center" to="/" style={gradientTextStyle}>
          <img
            src="/logo/logo_siksha_sarthi.jpg"
            alt="Shiksha Sarthi Logo"
            style={{
              height: "60px",
              width: "60px",
              objectFit: "cover",
              borderRadius: "50%",
              marginRight: "12px"
            }}
          />
          Shiksha Sarthi
        </button>

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
            {/* <li className="nav-item">
              <button onClick={() => getAdminAccess()} className="nav-link">
                Admin Access
              </button>
            </li> */}
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
