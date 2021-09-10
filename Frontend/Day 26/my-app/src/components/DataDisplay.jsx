import React from "react";
import {useSelector} from "react-redux"

function DataDisplay() {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  return (
    <div className="DataDisplay">
      <h2>Data</h2>
      <h4>Username : {name}</h4>
      <h4>Email : {email}</h4>
    </div>
  );
}

export default DataDisplay;