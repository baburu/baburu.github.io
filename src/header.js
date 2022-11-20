import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="page-nav">
          <div className="icon-top">
            <img src={require("./img/template/icon_bg_top_1920.png")} />
          </div>
          <div className="navbar-links">
            <div className="nav-link-cu">
              <Link to="/nikke">Nikke</Link>
            </div>
            <div className="nav-link-cu">
              <a href="https://www.twitch.tv/baburubaburu">Stream</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-diamond"></div>
      <Outlet />
    </header>
  );
};

export default Header;
