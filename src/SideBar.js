import React from "react";
import { Link } from "react-router-dom";

class SiderBar extends React.Component {
  render() {
    return (
      <div className="nav-left-sidebar sidebar-dark">
        <div className="menu-list">
          <nav className="navbar navbar-expand-lg card-img-3">
            <Link to="/dashboard" className="d-xl-none d-lg-none">
              Dashboard
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-column">
                <li className="nav-divider">Menu</li>
                <li className="nav-item ">
                  <Link
                    to="/"
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fa-user-circle"></i>Dashboard
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    to="/assessments"
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fas fa-users"></i>Assessments
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/questions"
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fas fa-users"></i>Questions
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    to="/myevents"
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fa-chart-pie"></i>My Events
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/myeventsss"
                    className="nav-link"
                    href="#"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#submenu-1"
                    aria-controls="submenu-1"
                  >
                    <i className="fa fa-fw fa-chart-pie"></i>Chart
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default SiderBar;
