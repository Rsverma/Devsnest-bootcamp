import React from "react";
import { deleteTask} from "../actions"
import {useSelector, useDispatch} from "react-redux"

function DataDisplay() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  return (
    <div className="DataDisplay">
      {tasks.map((task,index) =>
      {
        return <div key={index} >
          <span>{task}</span>
          <button onClick={() => { 
            dispatch(deleteTask(index))
          }}>Delete</button>
        </div>
      }
      )}
    </div>
  );
}

export default DataDisplay;