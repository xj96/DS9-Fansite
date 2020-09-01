import React from "react";
import EmployeeListCard from "../../EmployeeListCard";
import EmployeeDetailsCard from "../../EmployeeDetailsCard";
import SearchBar from "../../SearchBar";
import banner from "../../../images/ds9cast.jpg";

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmployee: {
        name: "",
        role: "",
        bio: "",
      },
    };
  }

  handleEmployeeClick = (employee) => {
    this.setState({
      currentEmployee: employee,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <img src={banner} className="img-fluid" />
            </div>
            <br />
            <br />
            <div className="search-bar">
              <SearchBar />
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col">
            <EmployeeListCard handleEmployeeClick={this.handleEmployeeClick} />
          </div>
          <div className="col">
            <EmployeeDetailsCard currentEmployee={this.state.currentEmployee} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainSection;
