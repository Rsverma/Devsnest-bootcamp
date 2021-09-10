import { addTask} from "../actions";
import {useDispatch} from "react-redux";
import { useState } from "react";

export default function DataInput() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addNewTask = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask("");
  };
  return (
    <div className="DataInput">
      <h2>To Do List</h2>
      <form onSubmit={addNewTask}>
        <input onChange={(e) => setTask(e.target.value)} type="text" placeholder="New Task" value={task} required/>
        <button>Add</button>
      </form>
    </div>
  );
}