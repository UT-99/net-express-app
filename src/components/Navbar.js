import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";

const Navbar = () => {
  return (
    <>
      <div className="navbar_flex">
        <div className="Logo_netexpress">NetExpress</div>
        <nav className="navbar">
          <Link to="/" className="textdecoration">
            Home
          </Link>
          <Link to="/Package" className="textdecoration">
            Packages
          </Link>
          <Link to="/Services" className="textdecoration">
            Services
          </Link>
          <Link to="/Shop" className="textdecoration">
            Shop
          </Link>
          <Link to="/Page" className="textdecoration">
            Page
          </Link>
          <Link to="/Shop" className="textdecoration">
            <ShoppingCartIcon />
          </Link>
          <Link to="/Profile" className="textdecoration">
            <PeopleAltSharpIcon />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
