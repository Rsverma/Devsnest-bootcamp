import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="container">
      <Card food="Pizza" calorie="56" />
      <Card food="Burger" calorie="69" />
      <Card food="Coke" calorie="500" />
      <Card food="Browne" calorie="180" />
      <Card food="Fried Rice" calorie="90" />
      <Card food="Lassania" calorie="200" />
      <Card food="Pani Puri" calorie="10" />
    </div>
  );
}

export default App;
