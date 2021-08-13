const placeDataReducer = (state = {}, action) => {
  if (action.type === "UPDATE_PLACE_DATA") return action.payload;
  else return state;
};
export default placeDataReducer;
