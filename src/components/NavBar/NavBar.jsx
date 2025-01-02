import React, { useRef } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
//import { CgBee } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiHome6Line } from "react-icons/ri";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header">
      <div className="header__content container">
        <div className="header__content-logo">
          <Link to="/">
            <h1>
              <RiHome6Line />
            </h1>
          </Link>
        </div>
        <div className="header__content-menu">
          <nav ref={navRef}>
            <Link to="/">
              <button onClick={showNavBar}>Home</button>
            </Link>
            <Link to="/fotos">
              <button onClick={showNavBar}>Mis Fotitos</button>
            </Link>
            <Link to="https://maps.app.goo.gl/STpVN8qxx6odiQYH7">
              <button onClick={showNavBar}>Ir a mi cumple</button>
            </Link>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
