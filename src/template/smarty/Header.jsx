import React from "react";
import { NavLink } from "react-router-dom";
import { PATH_IMAGES } from "../../helpers";

const Header = () => {
  return (
    <div id="header" className="sticky clearfix header-md">
      {/* TOP NAV */}
      <header id="topNav">
        <div className="container">
          {/* Mobile Menu Button */}
          <button
            className="btn btn-mobile"
            data-toggle="collapse"
            data-target=".nav-main-collapse"
          >
            <i className="fa fa-bars" />
          </button>
          {/* Logo */}
          <NavLink to="/" className="logo pull-left">
            {/* <img src="../assets/images/smty_blogs/logo_dark_quicksand.png" alt="logo" /> */}
            <img src={PATH_IMAGES + "/logo_letter_dark.png"} alt="logo" />
          </NavLink>
          {/*
    Top Nav

    AVAILABLE CLASSES:
    submenu-dark = dark sub menu
						*/}
          <div className="navbar-collapse pull-right nav-main-collapse collapse">
            <nav className="nav-main">
              {/*
        NOTE

        For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
        Direct Link Example:

        <li>
          <a href="#">HOME</a>
        </li>
								*/}
              <ul id="topMain" className="nav nav-pills nav-main">
                <li> {/* className="active" */}
                  <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="blog/posts">Blog</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/* /Top Nav */}
    </div>
  );
};

export default Header;
