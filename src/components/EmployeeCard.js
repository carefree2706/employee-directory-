import React from "react"

function EmployeeCard(props){
    return (
        <tr>
            <th scope="row"><img alt= {props.firstName} src= {props.picture}/></th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.dob}</td>
        </tr>
    );
}

export default EmployeeCard