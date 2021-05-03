import React from  "react";
import EmployeeCard from "./EmployeeCard";

function ResultList(props){
    console.log(props.result);
    return (
        <table className = "table">
            <table styleName = "width:100%">
            <tr>
            <th>Employee Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>D.O.B.</th>
          </tr>

          {props.result.map(item => (
              <EmployeeCard
              picture={item.picture.large}
              firstName={item.name.first}
              lastName={item.name.last}
              email={item.email}
              phone={item.phone}
              dob={item.dob.date}
               />

          ))}
            </table>
        </table>
    )
};

export default ResultList