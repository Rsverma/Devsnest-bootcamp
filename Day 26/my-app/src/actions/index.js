const updateName = (name) => {
  return {
    type: "UPDATE_NAME",
    text: name,
  };
};

const updateEmail = (email) => {
  return {
    type: "UPDATE_EMAIL",
    text: email,
  };
};
export { updateName, updateEmail };
