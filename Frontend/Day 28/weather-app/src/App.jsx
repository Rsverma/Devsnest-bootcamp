import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=e6e48c70fe025013c0c4fdf06cc9b7d3`
    )
      .then((res) => res.json())
      .then((data) => setPlaceData(data));
  };

  return <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter city name"/>
          <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
        </div>
        <div className="offset-md-1 col-10">
          <Card placeData={placeData}/>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
