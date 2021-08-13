const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=e6e48c70fe025013c0c4fdf06cc9b7d3`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        })
      );
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { updatePlaceData, toggleTheme };
