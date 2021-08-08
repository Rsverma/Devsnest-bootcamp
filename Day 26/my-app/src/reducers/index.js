import { nameReducer, emailReducer } from "./textReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  name: nameReducer,
  email: emailReducer,
});

export default rootReducer;
