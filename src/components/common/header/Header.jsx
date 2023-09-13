import { useState } from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const headerStyle = {
    width: "96vw",
  };
  const navStyle = {
    flexDirection: click ? "column" : "row",
  };
  const toggleMenu = () => {
    setClick(!click);
  };

  return (
    <div className="containerHeader">
      <Head />
      <header style={headerStyle}>
        <nav className={`flexSB ${click ? "active" : ""}`} style={navStyle}>
          {/* Hamburger Icon */}
          <button className="toggle" onClick={toggleMenu}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
          <ul className="flex" onClick={() => setClick(false)}>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/schemes" activeClassName="active">
                Schemes
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourTeam" activeClassName="active">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET STARTED</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
