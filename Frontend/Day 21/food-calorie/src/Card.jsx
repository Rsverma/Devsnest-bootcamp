import "./Card.css";
import { useState } from "react";
function Card(props)
{
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(props.food.title);
    const [calorie, setCalorie] = useState(props.food.calorie);

    const handleSubmit = (e) => {
      e.preventDefault();
      props.updateFood({ title, calorie },props.index);
      setIsEditing(false);
    };
    return <div className="Card">
        {isEditing?<form onSubmit={handleSubmit}>
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
<br />
        <button onClick={()=> {props.deleteFood(props.index);
        }} className="btn btn-danger">Delete</button>

        <button type="submit" className="btn btn-primary"> Done </button>
        
    </form>
        :
        <div>
        <h2>{props.food.title}</h2>
        <p>you have consumed {props.food.calorie} cals today</p>
        <button onClick={()=> {
            props.deleteFood(props.index);
        }} className="btn btn-danger">Delete</button>

        <button onClick={()=> { setIsEditing(true);}} className="btn btn-primary">Edit</button>
        </div>}
    </div>;

}
export default Card;