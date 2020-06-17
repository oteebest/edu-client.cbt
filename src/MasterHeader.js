import React from "react";
import "../src/css/special.css";
import { Link } from "react-router-dom";
import { IdentityManager } from "./util/identity";

const MasterHeader = () => {
  function Logout() {
    localStorage.clear();
    IdentityManager.signoutRedirect();
  }

  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <Link className="navbar-brand" to="../index-2.html">
          <img src="../assets/images/logo.png" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item dropdown notification">
              <button
                className="nav-link nav-icons link-button"
                id="navbarDropdownMenuLink1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-fw fa-bell"></i>{" "}
                <span className="indicator"></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                <li>
                  <div className="notification-title"> Notification</div>
                  <div className="notification-list">
                    <div className="list-group">
                      <button className="list-group-item list-group-item-action active">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img
                              src="../assets/images/avatar-2.jpg"
                              alt=""
                              className="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">
                              Jeremy Rakestraw
                            </span>
                            accepted your invitation to join the team.
                            <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </button>
                      <button className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img
                              src="../assets/images/avatar-3.jpg"
                              alt=""
                              className="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">
                              John Deo
                            </span>
                            is now following you
                            <div className="notification-date">2 days ago</div>
                          </div>
                        </div>
                      </button>
                      <button className="list-group-item list-group-item-action">
                        <div className="notification-info">
                          <div className="notification-list-user-img">
                            <img
                              src="../assets/images/avatar-4.jpg"
                              alt=""
                              className="user-avatar-md rounded-circle"
                            />
                          </div>
                          <div className="notification-list-user-block">
                            <span className="notification-list-user-name">
                              Monaan Pechi
                            </span>{" "}
                            is watching your main repository
                            <div className="notification-date">2 min ago</div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list-footer">
                    <Link to="">View all notifications</Link>
                  </div>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown nav-user">
              <button
                className="nav-link nav-user-img link-button"
                id="navbarDropdownMenuLink2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/avatar-1.jpg"
                  alt=""
                  className="user-avatar-md rounded-circle"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                aria-labelledby="navbarDropdownMenuLink2"
              >
                <div className="nav-user-info">
                  <h5 className="mb-0 text-white nav-user-name">John Deo</h5>
                  <span className="status"></span>
                  <span className="ml-2">Available</span>
                </div>
                <button className="dropdown-item link-button">
                  <i className="fas fa-user mr-2"></i>Account
                </button>
                <button className="dropdown-item link-button">
                  <i className="fas fa-cog mr-2"></i>Setting
                </button>
                <button className="dropdown-item link-button" onClick={Logout}>
                  <i className="fas fa-power-off mr-2"></i>Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MasterHeader;
