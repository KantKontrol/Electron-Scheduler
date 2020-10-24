import React from "react";


export default function ADisplay(props){

    let { appointment, removeApp, completeApp } = props;
    const { _id, childName, parentName, date, hour, minute, ampm } = appointment


    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{parentName}</td>
            <td>{childName}</td>
            <td>{date}</td>
            <td>{`${hour}:${minute} ${ampm}`}</td>
            <td><button className="btn btn-success" onClick={() => completeApp(_id)} >✓</button> <button className="btn btn-primary" onClick={() => removeApp(_id)} >X</button></td>
        </tr>
    );
}
