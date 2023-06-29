import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./Navbar.css";
import excel_logo from "../../assets/svg/excel23_logo.svg";

function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const scrollPosition = useScrollPosition();

  const navStyle = {
    background:'radial-gradient(302.65% 802.86% at -9.28% 321.91%,#140915 25.44%,var(--primary-color) 100%)',
    boxShadow:
      scrollPosition > 200 ? "#28AA47" : "none",
  };

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
          <NavLink to="/#">
            <img src={excel_logo} alt="" />
          </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink to="/#about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            Why Participate
          </NavLink>

          <NavLink to="/#timeline" className="nav__link">
            Timeline
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            Prizes
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            Gallery
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            FAQ
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            Bounties
          </NavLink>
          <NavLink to="/#team" className="nav__link">
            Contacts Us
          </NavLink>
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              About
            </NavLink>
            <NavLink
              to="/#highlights"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Highlights
            </NavLink>
            <NavLink
              to="/#timeline"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Timeline
            </NavLink>
            <NavLink
              to="/#partners"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Participating Organizations
            </NavLink>
            <NavLink
              to="/#organizations"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Organized by
            </NavLink>
            <NavLink
              to="/#team"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              Contacts Us
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
