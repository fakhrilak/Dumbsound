import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ModalLogin from "./components/Login/Login";
import ModalRegister from "./components/Register/Register";
import Home from "./pages/Home";
import AddMusic from "./pages/AddMusic";
import AddArtis from "./pages/AddArtis";
import AdminRoute from "./components/Routing/AdminRoute";
import UserRoute from "./components/Routing/UserRoute";
import Payment from "./pages/Payment";
import AllUsers from "./pages/AllUsers"
import Approve from "./pages/Transaction"

import { loadUser } from "./actions/auth";
import { setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const showModalLogin = () => {
    setModalLogin(!modalLogin);
    setModalRegister(false);
  };


  const showModalRegister = () => {
    setModalRegister(!modalRegister);
    setModalLogin(false);
  };

  return (
    <div className="app">
    <Provider store={store}>
      <div className="app">
      <BrowserRouter>
        <Router>
          <Navbar
            showModalLogin={showModalLogin}
            showModalRegister={showModalRegister}/>
          <Route path="/" exact component={Home}/>
          <UserRoute path="/payment" exact component={Payment}/>

          <AdminRoute exact path="/add-music" component={AddMusic}/>
          <AdminRoute exact path="/add-artis" component={AddArtis}/>
          <AdminRoute exact path="/all-users" component={AllUsers}/>
          <AdminRoute exact path="/transaction" component={Approve}/>
          
          {modalLogin && (
            <ModalLogin showModalLogin={showModalLogin} modalLogin={modalLogin} showModalRegister={showModalRegister} /> )}
          {modalRegister && (
            <ModalRegister showModalRegister={showModalRegister} modalRegister={modalRegister} showModalLogin={showModalLogin}/>)}
        </Router>
        </BrowserRouter>
      </div>
    </Provider>
    </div>
  );
}

export default App;
