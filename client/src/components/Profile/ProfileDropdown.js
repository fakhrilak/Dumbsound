import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyCheck,
  faEdit,
  faPowerOff,
  faMusic,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { handleLogout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfileDropdown = ({
  showProfileDropdown,
  handleLogout,
  auth: {
    user: { role , subscribe },
  },
}) => {
  let history = useHistory();


  const openPayment = () => {
    history.push(`/payment`);
    showProfileDropdown();
  };

  const Addartis = () => {
    history.push(`/add-artis`);
    showProfileDropdown();
  };

  const Addmusic = () => {
    history.push(`/add-music`);
    showProfileDropdown();
  };
  const AllUsers = () =>{
    history.push(`/all-users`);
    showProfileDropdown();
  }
  const Approve = () => {
    history.push("/transaction");
    showProfileDropdown();
  };
  const setLogout = () => {
    handleLogout();
    showProfileDropdown();
  };

  return (
    <div>
      <div className="profile-square">
        <div className="profile-arrow" />
        { (role === 2 && subscribe=== null)?(
          <>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => openPayment()}>
                  Pay
                </span>
              </div>
            </div>
          </>
        ) : null}
        {role === 1 ? (
          <>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faUser} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => Addartis()}>
                  Add Artis
                </span>
              </div>
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faMusic} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => Addmusic()}>
                  Add Music
                </span>
              </div> 
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faEdit} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => Approve()}>
                  Transaction
                </span>
              </div> 
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FontAwesomeIcon icon={faUser} className="icon" />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu" onClick={() => AllUsers()}>
                  Users
                </span>
              </div> 
            </div>
          </>
        ) : null}

        <hr style={{ marginBottom: "18px" }} />
        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faPowerOff} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => setLogout()}>
              LogOut
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleLogout })(ProfileDropdown);
