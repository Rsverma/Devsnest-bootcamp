import "./Card.css";
function Card(props)
{
    return <div className="Card">
        <h1>{props.food.name}</h1>
        <button onClick={()=> {
            const newFoods = props.foods.filter((x,index) => index !== props.index);
            props.setFoods(newFoods);
        }}>Delete</button>
        <h2>you have consumed {props.food.calorie} cals today</h2>
    </div>;

}
export default Card;