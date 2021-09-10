import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";

function Form({ addFood }) {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({ title, calorie });
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Calorie amount"
        value={calorie}
        onChange={(e) => setCalorie(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
}

function App() {
  const [foods, setFoods] = useState([{ title: "Pizza", calorie: 56 }]);
  const addFood = (food) => {
    setFoods([...foods, food]);
  };
  const updateFood = (food, index) => {
    const newFoods = foods.map((item, i) => (i === index ? food : item));
    setFoods(newFoods);
  };
  const deleteFood = (index) => {
    const newFoods = foods.filter((item, i) => i !== index);
    setFoods(newFoods);
  };
  return (
    <div>
      <Form addFood={addFood} />
      {foods.length === 0 ? (
        <h2>Start Adding items</h2>
      ) : (
        foods.map((food, index) => (
          <Card
            key={index}
            food={food}
            index={index}
            updateFood={updateFood}
            deleteFood={deleteFood}
          />
        ))
      )}
    </div>
  );
}

export default App;
