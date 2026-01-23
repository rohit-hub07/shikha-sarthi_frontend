import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "/colours-kitchen-logo.png";

import "./image.css";

const Navigation = ({ onQuoteClick }) => {
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
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/secondFront"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Design Ideas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/secondFront/modularKitchen">
                      Modular Kitchen Designs
                    </Link>
                  </li> */}
              <li className="nav-item dropdown d-flex align-items-center">
                {/* TEXT → PAGE NAVIGATION */}
                <Link className="nav-link" to="/">
                  Design Ideas
                </Link>

                {/* ARROW → DROPDOWN */}
                <button
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
              </li>
              <li className="nav-item dropdown d-flex align-items-center">
                {/* TEXT → PAGE NAVIGATION */}
                <Link className="nav-link" to="/">
                  Magazine
                </Link>

                {/* ARROW → DROPDOWN */}
                <button
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
                      Room Ideas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/bedroom">
                      Decor & Inspiration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/livingroom"
                    >
                      Ceiling Designs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Furniture Ideas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Home Decor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Lighting Ideas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Wall Design Ideas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Expert Advice
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Interior Advice
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Vastu Tips
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Home Organisation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Materials Guide
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Home Renovation Ideas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Commercial Interiors
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown d-flex align-items-center">
                {/* TEXT → PAGE NAVIGATION */}
                <Link className="nav-link" to="/">
                  Cities
                </Link>

                {/* ARROW → DROPDOWN */}
                <button
                  className="nav-link dropdown-toggle btn btn-link p-0 ms-1"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/secondFront/saran" className="dropdown-item">
                      Balod
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/patna">
                      Baloda Bazar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/secondFront/vijayawada"
                    >
                      Balrampur-Ramanujganj
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/kanpur">
                      Bastar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/goa">
                      Bijapur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Bilaspur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/dehradun">
                      Dehradun
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/agra">
                      Dantewada (Dakshin Bastar)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Dhamtari
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Durg
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Gariaband
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Gaurela-Pendra-Marwahi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Janjgir-Champa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Janjgir-Champa
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Jashpur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Kabirdham (Kawardha)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Kanker
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Kondagaon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Khairagarh-Chhuikhadan-Gandai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Korba
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Koriya
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Mahasamund
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Manendragarh-Chirmiri-Bharatpur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Mohla-Manpur-Ambagarh Chowki
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Mungeli
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Narayanpur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Raigarh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Raipur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Rajnandgaon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Sarangarh-Bilaigarh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Sakti
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Sukma
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Surajpur
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/secondFront/surat">
                      Surguja
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
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
                    <Link className="dropdown-item" to="/dining">
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
                <Link className="nav-link" to="/project">
                  PROJECT
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/home5">SERVICES</Link>
              </li> */}

              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={goToServices}
                >
                  SERVICES
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
                  className="btn btn-danger px-4 py-2 rounded-3 shadow-sm"
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
                HOME
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
                ABOUT
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
                PROJECT
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
                SERVICES
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

export default Navigation;
