import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "/Colours_Kitchen_Logo.png";

import "./image.css";

const NavBar = ({ onQuoteClick }) => {
  const navigate = useNavigate();
  // const gradientTextStyle = {
  //   fontSize: "40px",
  //   background: "radial-gradient(circle, red, yellow)",
  //   WebkitBackgroundClip: "text",
  //   WebkitTextFillColor: "transparent",
  // };

  const goToServices = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("services");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      {/* navbar-expand-lg → ONLY desktop shows horizontal menu */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-1">
        <div className="container-fluid">
          {/* BRAND */}
          {/* <Link
            className="navbar-brand fw-bold py-4"
            to="/"
            style={gradientTextStyle}
          >
            Colors Kitchen
          </Link> */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Colors Kitchen Logo"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* TOGGLER → MOBILE + TABLET */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* DESKTOP MENU ONLY */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav ms-auto align-items-center gap-4 flex-nowrap">
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item dropdown d-flex align-items-center"> */}
              {/* TEXT → PAGE NAVIGATION */}
              {/* <Link className="nav-link fw-semibold" to="/">
                  Design Ideas
                </Link> */}

              {/* ARROW → DROPDOWN */}
              {/* <button
                  className="nav-link dropdown-toggle btn btn-link p-0 ms-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />

                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/secondFront/modularKitchen"
                      className="dropdown-item"
                    >
                      Modular Kitchen Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/wardrobe">
                      Wardrobe Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/bathroom">
                      Bathroom Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/masterBedroom"
                    >
                      Master Bedroom Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/livingroom"
                    >
                      Living Room Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/poojaroom">
                      Pooja Room Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/tvUnit">
                      TV Unit Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/falseCelling"
                    >
                      False Ceiling Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/kidsBedroom"
                    >
                      Kids Bedroom Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/balcony">
                      Balcony Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/diningRoom"
                    >
                      Dining Room Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/foyer">
                      Foyer Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/homesByLivspace"
                    >
                      Homes by Livspace
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/homeOffice"
                    >
                      Home Office Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/guestBedroom"
                    >
                      Guest Bedroom Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/window">
                      Window Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/flooring">
                      Flooring Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/wallDecor">
                      Wall Decor Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/wallPaint">
                      Wall Paint Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/homeWallpaper"
                    >
                      Home Wallpaper Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/tile">
                      Tile Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/studyroom">
                      Study Room Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/kitchenSinks"
                    >
                      Kitchen Sinks
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/spaceSavingDesign"
                    >
                      Space Saving Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/door">
                      Door Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/staircase">
                      Staircase Designs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/crockeryUnit"
                    >
                      Crockery Unit Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/homeBar">
                      Home Bar Designs
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item dropdown mega-dropdown">
                <NavLink
                  className="nav-link fw-semibold dropdown-toggle"
                  to="/secondFront/*"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Design Ideas
                </NavLink>

                <div className="dropdown-menu mega-menu p-4 shadow-lg">
                  <div className="mega-grid">
                    <NavLink
                      to="/secondFront/modularKitchen"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Modular Kitchen Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/wardrobe"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Wardrobe Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/bathroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Bathroom Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/masterBedroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Master Bedroom Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/livingroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Living Room Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/poojaroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Pooja Room Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/tvUnit"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      TV Unit Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/falseCelling"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      False Ceiling Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/kidsBedroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Kids Bedroom Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/balcony"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Balcony Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/diningRoom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Dining Room Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/foyer"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Foyer Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/homesByLivspace"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Homes by Livspace
                    </NavLink>

                    <NavLink
                      to="/secondFront/homeOffice"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Home Office Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/guestBedroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Guest Bedroom Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/window"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Window Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/flooring"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Flooring Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/wallDecor"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Wall Decor Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/wallPaint"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Wall Paint Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/homeWallpaper"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Home Wallpaper Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/tile"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Tile Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/studyroom"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Study Room Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/kitchenSinks"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Kitchen Sinks
                    </NavLink>

                    <NavLink
                      to="/secondFront/spaceSavingDesign"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Space Saving Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/door"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Door Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/staircase"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Staircase Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/crockeryUnit"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Crockery Unit Designs
                    </NavLink>

                    <NavLink
                      to="/secondFront/homeBar"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Home Bar Designs
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown mega-dropdown">
                {/* TEXT → PAGE NAVIGATION */}
                <NavLink
                  className="nav-link fw-semibold dropdown-toggle"
                  to="/secondFront/*"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Magazine
                </NavLink>

                {/* ARROW → DROPDOWN */}
                {/* <button
                  className="nav-link dropdown-toggle btn btn-link p-0 ms-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                /> */}

                <div className="dropdown-menu mega-menu p-4 shadow-lg">
                  <div className="mega-grid">
                    <NavLink
                      to="/secondFront/modularKitchen"
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                    >
                      Room Ideas
                    </NavLink>
                    <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Decor & Inspiration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                      to="/secondFront/livingroom"
                    >
                      Ceiling Designs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Furniture Ideas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Home Decor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Lighting Ideas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Wall Design Ideas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Expert Advice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Interior Advice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Vastu Tips
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Home Organisation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Materials Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Home Renovation Ideas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/bedroom">
                      Commercial Interiors
                    </NavLink>
                  </li>
                </div>
                </div>
              </li>
              <li className="nav-item dropdown mega-dropdown">
                {/* TEXT → PAGE NAVIGATION */}
                <NavLink
                  className="nav-link fw-semibold dropdown-toggle"
                  to="/secondFront/*"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cities
                </NavLink>
                <div className="dropdown-menu mega-menu p-4 shadow-lg">
                  <div className="mega-grid">
                    <NavLink to="/secondFront/saran" className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }>
                      Balod
                    </NavLink>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/patna">
                      Baloda Bazar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      }
                      to="/secondFront/vijayawada"
                    >
                      Balrampur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/kanpur">
                      Bastar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/goa">
                      Bijapur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } href="/secondFront/saran">
                      Bilaspur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/dehradun">
                      Dehradun
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/agra">
                      Dantewada
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Dhamtari
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Durg
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Gariaband
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Gaurela-Pendra-Marwahi
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Janjgir-Champa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Jashpur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Kabirdham
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Kanker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Kondagaon
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Khairagarh-Chhuikhadan-Gandai
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Korba
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Koriya
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Mahasamund
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Manendragarh-Chirmiri-Bharatpur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Mohla-Manpur-Ambagarh Chowki
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Mungeli
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Narayanpur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Raigarh
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Raipur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Rajnandgaon
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Sarangarh-Bilaigarh
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Sakti
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Sukma
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Surajpur
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>
                        isActive ? "mega-link mega-active" : "mega-link"
                      } to="/secondFront/surat">
                      Surguja
                    </NavLink>
                  </li>
                </div>
              </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle fw-semibold"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Furniture
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="secondFront/sofas">
                      Sofas & Sofa Beds
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="secondFront/diningTables"
                    >
                      Dining Tables & Sets
                    </Link>
                  </li>

                  {/* Tables */}
                  <li className="dropdown-submenu">
                    <button className="dropdown-item d-flex justify-content-between align-items-center">
                      Tables <span>›</span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/tables/bedside">
                          Bedside Tables
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/tables/center">
                          Center & Coffee Tables
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/tables/nested">
                          Nested Tables
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/tables/side">
                          Side / End Tables
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Occasional Seating */}
                  <li className="dropdown-submenu">
                    <button className="dropdown-item d-flex justify-content-between align-items-center">
                      Occasional Seating <span>›</span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/chairs">
                          Accent Chairs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/benches">
                          Benches
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/poufs">
                          Poufs
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/project">
                  Project
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/home5">SERVICES</Link>
              </li> */}

              <li className="nav-item">
                <button
                  className="nav-link btn btn-link fw-semibold"
                  onClick={goToServices}
                >
                  Services
                </button>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link fs-4"
                  href="https://wa.me/9993690392"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>

              {/* DESKTOP CTA */}
              <li className="nav-item">
                <button
                  onClick={onQuoteClick}
                  className="btn btn-danger px-4 py-2 rounded-3 shadow-sm fw-semibold"
                >
                  Get Free Quote
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= OFFCANVAS (MOBILE + TABLET) ================= */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-0.5">
            <li className="nav-item">
              <Link className="nav-link" to="/" data-bs-dismiss="offcanvas">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Design Ideas
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Modular Kitchen Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Bedroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Livingroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Design Ideas 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 6
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 7
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 8
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Magazine
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    Modular Kitchen Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Bedroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Livingroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Design Ideas 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 6
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 7
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 8
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cities
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/secondFront/saran">
                    Saran
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Bedroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Livingroom Designs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Design Ideas 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 6
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 7
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Designs Ideas 8
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                data-bs-dismiss="offcanvas"
              >
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/furniture"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Furniture
              </Link>

              <ul className="dropdown-menu">
                {/* Direct items */}
                <li>
                  <Link className="dropdown-item" to="/sofas">
                    Sofas & Sofa Beds
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/dining">
                    Dining Tables & Sets
                  </Link>
                </li>

                {/* Tables (nested) */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="#">
                    Tables
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/tables/bedside">
                        Bedside Tables
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tables/center">
                        Center & Coffee Tables
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tables/nested">
                        Nested Tables
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/tables/side">
                        Side / End Tables
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Occasional Seating (nested) */}
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="#">
                    Occasional Seating
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/chairs">
                        Accent Chairs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/benches">
                        Benches
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/poufs">
                        Poufs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/project"
                data-bs-dismiss="offcanvas"
              >
                Project
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="/home5"
                data-bs-dismiss="offcanvas"
              >
                SERVICES
              </Link>
            </li> */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={goToServices}
                data-bs-dismiss="offcanvas"
              >
                Services
              </button>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fs-4"
                href="https://wa.me/9993690392"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>

            {/* MOBILE + TABLET CTA */}
            <li className="mt-2">
              <button
                onClick={onQuoteClick}
                className="btn btn-danger w-100 shadow-sm"
                data-bs-dismiss="offcanvas"
              >
                Get Free Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
