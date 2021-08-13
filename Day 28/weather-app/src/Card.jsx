import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"

var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

function Card(props){
    return <div className="card">
        <div className="data">
            {props.placeData.city ? 
            (
                <div>
                <h1>{props.placeData.city.name}</h1>
                <img className="mainIcon" alt="" src={"http://openweathermap.org/img/wn/" + props.placeData.list[0].weather[0].icon + "@2x.png"}></img>
                <h1>{props.placeData.list[0].main.temp}°</h1>
                <span>{props.placeData.list[0].main.temp_min}°</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{props.placeData.list[0].main.temp_max}°</span>
                <p>{props.placeData.list[0].weather[0].description}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <p>{weekday[new Date(props.placeData.list[8].dt * 1000).getDay()]}</p>
                            <img alt="" src={"http://openweathermap.org/img/wn/" + props.placeData.list[8].weather[0].icon + "@2x.png"}></img>
                            <span>{Math.round(props.placeData.list[8].main.temp_min)}°</span>/
                            <span>{Math.round(props.placeData.list[8].main.temp_max)}°</span>
                        </div>
                        <div className="col-3">
                            <p>{weekday[new Date(props.placeData.list[16].dt * 1000).getDay()]}</p>
                            <img alt="" src={"http://openweathermap.org/img/wn/" + props.placeData.list[16].weather[0].icon + "@2x.png"}></img>
                            <span>{Math.round(props.placeData.list[16].main.temp_min)}°</span>/
                            <span>{Math.round(props.placeData.list[16].main.temp_max)}°</span>
                        </div>
                        <div className="col-3">
                            <p>{weekday[new Date(props.placeData.list[24].dt * 1000).getDay()]}</p>
                            <img alt="" src={"http://openweathermap.org/img/wn/" + props.placeData.list[24].weather[0].icon + "@2x.png"}></img>
                            <span>{Math.round(props.placeData.list[24].main.temp_min)}°</span>/
                            <span>{Math.round(props.placeData.list[24].main.temp_max)}°</span>
                        </div>
                        <div className="col-3">
                            <p>{weekday[new Date(props.placeData.list[32].dt * 1000).getDay()]}</p>
                            <img alt="" src={"http://openweathermap.org/img/wn/" + props.placeData.list[32].weather[0].icon + "@2x.png"}></img>
                            <span>{Math.round(props.placeData.list[32].main.temp_min)}°</span>/
                            <span>{Math.round(props.placeData.list[32].main.temp_max)}°</span>
                        </div>
                    </div>
                </div>
                </div>
            )
            
            
            :(<div>Place not found</div>)}
            
        </div>
    </div>
};

export default Card;