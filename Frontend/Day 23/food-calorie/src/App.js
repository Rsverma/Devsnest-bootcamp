import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { useArray } from "./useArray";

function Form({ addFood, clearList }) {
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

      <button name="add" type="submit" className="btn btn-primary">
        Add Item
      </button>
      <button
        name="clear"
        type="button"
        onClick={clearList}
        className="btn btn-danger"
      >
        Clear list
      </button>
    </form>
  );
}

function App() {
  const foods = useArray([]);
  return (
    <div>
      <Form addFood={foods.add} clearList={foods.clear} />
      {foods.length === 0 ? (
        <h2>Start Adding items</h2>
      ) : (
        foods.value.map((food, index) => (
          <Card
            key={index}
            food={food}
            index={index}
            updateFood={foods.updateAtIndex}
            deleteFood={foods.removeByIndex}
          />
        ))
      )}
    </div>
  );
}

export default App;
