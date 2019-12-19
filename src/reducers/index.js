import { combineReducers } from "redux";

import flats from "./flats";
import favorites from "./favorites";
import modal from "./modal";

export default combineReducers({ flats, favorites, modal });
