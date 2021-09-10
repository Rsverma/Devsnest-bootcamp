import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";

function App() {
  const [foods, setFoods] = useState([
    { name: "Pizza", calorie: "56" },
    { name: "Burger", calorie: "69" },
    { name: "Coke", calorie: "500" },
    { name: "Browne", calorie: "180" },
    { name: "Fried Rice", calorie: "90" },
    { name: "Lassania", calorie: "200" },
    { name: "Pani Puri", calorie: "10" },
  ]);
  return (
    <div className="container">
      {foods.map((food, index) => (
        <Card
          key={index}
          food={food}
          foods={foods}
          setFoods={setFoods}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
