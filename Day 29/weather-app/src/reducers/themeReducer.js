const themeReducer = (state = false, action) => {
  if (action.type === "TOGGLE_THEME") return !state;
  else return state;
};
export default themeReducer;
