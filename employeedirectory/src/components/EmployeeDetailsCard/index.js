import React from "react";
import "./style.css";

function EmployeeDetailsCard(props) {
  return (
    <div className="card card-bot" style={{ width: "18rem" }}>
      <h5 className="card-title">Employee Detail</h5>
      <img
        src={props.currentEmployee.image}
        className="card-img-top detail-image rounded"
        alt=""
      />
      <div className="card-body">
        <li className="list-group-item">Name: {props.currentEmployee.name}</li>
        <li className="list-group-item">Role: {props.currentEmployee.role}</li>
        <li className="list-group-item bio">Bio: {props.currentEmployee.bio}</li>
      </div>
    </div>
  );
}

export default EmployeeDetailsCard;
