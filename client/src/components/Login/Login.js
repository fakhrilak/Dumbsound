import React, { useState, useEffect, useRef } from "react";

import Modal from "../Modal/Modal";
import { handleLogin } from "../../actions/auth";
import { connect } from "react-redux";
const Login = ({
  showModalLogin,
  showModalRegister,
  modalLogin,
  handleLogin
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    const{name,value} = e.target
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password, showModalLogin);
  };

  return (
    <div>
      <div onClick={() => showModalLogin()} className="back-drop" />
      <Modal className="modal" show={modalLogin} close={() =>showModalLogin() }>
        <h1>LOGIN</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="custom-input"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px",fontWeight:"bold" }}>
            <button type="submit" className="buttonlogin">
              Login
            </button>
          </div>
        </form>
        <p style={{ color: "#B1B1B1", fontSize: "18px" }}>
          Dont have an account ? Klik{" "}
          <span style={{ fontWeight: "900", cursor: "pointer" }} onClick={()=>showModalRegister()}>Here</span>
        </p>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { handleLogin })(Login);
