import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Dumbsound from "../../img/DUMBSOUND.png";
import person from "../../img/person.jpg";
import ProfileDropdown from "../Profile/ProfileDropdown";
import { connect } from "react-redux";

const Navbar = ({
  showModalLogin,
  showModalRegister,
  auth: {isAuthenticated}
}) => {
  const [isProfileDropdown, setProfileDropdown] = useState(false);
  const handleDropdownProfile = () => {
    setProfileDropdown(!isProfileDropdown);
  };


  return (
    <div className="navbar">
      <Link to="/"><img src={Dumbsound}></img></Link>
      {!isAuthenticated && (
        <div className="button-login-register">
          <button className="btn-light" onClick={() => showModalRegister()}>
            Register
          </button>
          <button className="btn-red" onClick={() => showModalLogin()}>
            Login
          </button>
        </div>
      )}
      {isAuthenticated && (
        <div className="profile" >
          <img src={person} alt="" onClick={() => handleDropdownProfile()} />
        </div>
      )}
      {isProfileDropdown && (
        <ProfileDropdown showProfileDropdown={() => handleDropdownProfile()} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Navbar);
