const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

const deleteTask = (index) => {
  return {
    type: "DELETE_TASK",
    payload: index,
  };
};
export { addTask, deleteTask };
