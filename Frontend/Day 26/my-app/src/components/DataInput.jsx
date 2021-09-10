import { updateName, updateEmail } from "../actions";
import {useDispatch} from "react-redux";

export default function DataInput() {
  const dispatch = useDispatch();
  return (
    <div className="DataInput">
      <h2>Input</h2>
      <input 
        onChange={(e) => dispatch(updateName(e.target.value))} type="text" placeholder="Name"/>
      <input onChange={(e) => dispatch(updateEmail(e.target.value))} type="text" placeholder="Email"/>
    </div>
  );
}