import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <h1 className="title is-2 has-text-primary">artus</h1>
        </NavLink>

        <Link
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {props.isLoggedIn ? (
              <div className="buttons">
                <NavLink
                  activeClassName="is-primary"
                  to="/editor"
                  className="button"
                >
                  New Article
                </NavLink>
                <NavLink
                  activeClassName="is-primary"
                  to="/settings"
                  className="button"
                >
                  Settings
                </NavLink>
              </div>
            ) : (
              <div className="buttons">
                <NavLink
                  activeClassName="is-primary"
                  to="/signup"
                  className="button"
                >
                  Sign up
                </NavLink>
                <NavLink
                  activeClassName="is-primary"
                  to="/login"
                  className="button"
                >
                  Log in
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
