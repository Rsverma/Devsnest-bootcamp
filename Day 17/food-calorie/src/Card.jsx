import "./Card.css";
function Card(props)
{
    return <div className="Card">
<h1>{props.food}</h1>
<h2>you have consumed {props.calorie} cals today</h2>
    </div>

}
export default Card;