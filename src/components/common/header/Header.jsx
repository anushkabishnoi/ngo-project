import { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const headerStyle = {
    width: "96vw",
  };

  return (
    <div className="containerHeader">
      <Head />
      <header style={headerStyle}>
        <nav className="flexSB">
          <ul onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schemes">Schemes</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ourTeam">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
