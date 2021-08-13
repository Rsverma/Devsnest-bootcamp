import placeDataReducer from "./placeDataReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  placeData: placeDataReducer,
  theme: themeReducer,
});

export default rootReducer;
