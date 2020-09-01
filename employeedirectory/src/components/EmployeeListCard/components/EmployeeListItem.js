import React from "react";
import "../../EmployeeListCard/style.css";

function EmployeeListItem(props) {
  const employeeClick = () => {
    console.log("employee click");
    props.handleEmployeeClick(props.employee);
  };

  return (
    <div className="list-item">
    <li className="media">
      <img
        src={props.employee.image}
        className="mr-3 list-image img-thumbnail"
        alt="Employee"
      />

      <div className="media-body">
        <h5 className="mt-0 mb-1" onClick={employeeClick}>
          {props.employee.name}
        </h5>
        <h6>{props.employee.role}</h6>
      </div>
    </li>
    </div>
  );
}
export default EmployeeListItem;
