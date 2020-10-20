import React from "react";


export default function ADisplay(props){

    let { appointment, removeApp } = props;
    const { _id, childName, parentName, date, hour, minute, ampm } = appointment


    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{parentName}</td>
            <td>{childName}</td>
            <td>{date}</td>
            <td>{`${hour}:${minute} ${ampm}`}</td>
        </tr>
    );
}




/*<div className="row adisplay-main">
<div className="col-5">
    <div className="adisplay adisplay-header float-left mr-3">Child: {childName}</div>
    <div className="adisplay adisplay-sub float-left mr-3">Parent: {parentName}</div>
</div>
<div className="col-3">
    <div className="adisplay adisplay-date float-right ml-3">{date}</div>
    <div className="adisplay adisplay-time float-right ml-3">{`${hour}:${minute} ${ampm}`}</div>
</div>
<div className="col-4">
    <button className="btn btn-primary" onClick={() => removeApp(_id)}>Remove Appointment</button>
</div>
</div>*/