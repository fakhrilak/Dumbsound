import { combineReducers } from "redux";

import auth from "./auth";
import artis from "./artis";
import music from "./music";
import users from "./Users";
import payment from "./payment";

export default combineReducers({ artis, auth, music , users,payment});
