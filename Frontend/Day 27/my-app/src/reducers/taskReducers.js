const taskReducer = (state = [], action) => {
  if (action.type === "ADD_TASK") return [...state, action.payload];
  else if (action.type === "DELETE_TASK")
    return state.filter((item, index) => index !== action.payload);
  else return state;
};
export { taskReducer };
