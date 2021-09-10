import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { updatePlaceData } from "./../actions";
import "./Form.css";
import { useSelector } from "react-redux";


const Form = () => {
  const theme = useSelector(state => state.theme)
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();

return <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter city name"/>
          <button className={theme===false?"dark":"light"} onClick= {()=> {dispatch(updatePlaceData(place))}}>Submit</button>
        </div>
        
      </div>
    </div>
}
export default Form;