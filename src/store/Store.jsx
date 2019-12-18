import { createStore, applyMiddleware } from "redux";
import { rootReducer, initialState } from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
);

export default store;
