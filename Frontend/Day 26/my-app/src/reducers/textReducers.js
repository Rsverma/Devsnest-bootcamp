const nameReducer = (state = "", action) => {
  if (action.type === "UPDATE_NAME") return action.text;
  else return state;
};
const emailReducer = (state = "", action) => {
  if (action.type === "UPDATE_EMAIL") return action.text;
  else return state;
};
export { nameReducer, emailReducer };
