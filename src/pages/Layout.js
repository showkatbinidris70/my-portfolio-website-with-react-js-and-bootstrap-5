import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Layout() {
  const [affix, setAffix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffix(true);
      } else {
        setAffix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);
  return (
    <>
      <header className="header sticky-top">
        <div className={`nav ${affix ? "affix" : ""}`}>
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-0">
                  <a className="navbar-brand" href="/">
                    <h3 className="fs-3">Showkat Ali</h3>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                    aria-expanded={!isNavCollapsed ? true : false}
                    onClick={handleNavCollapse}
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className={`${isNavCollapsed ? "collapse" : ""
                      } navbar-collapse`}
                    id="navbarNav"
                  >
                    <ul className="navbar-nav ms-md-auto gap-2 d-flex align-items-start align-items-lg-center">
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/about"
                          onClick={closeNav}
                        >
                          About Me
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/projects"
                          onClick={closeNav}
                        >
                          Projects
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          to="/contact"
                          onClick={closeNav}
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item rounded">
                        <Link
                          className="nav-link text-white rounded px-0 mx-lg-3 cta-btn"
                          target="_blank"
                          to="https://drive.google.com/file/d/1R1BgK_ZCBbI_OnjzXckPFmTzPXADHNBf/view?usp=sharing"
                        >
                          <p className="btn">
                            {" "}
                            Download Resume
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
