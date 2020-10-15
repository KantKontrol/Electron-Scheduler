import React from "react";


export default function ADisplay(props){

    let { appointment } = props;
    const { childName, parentName, date, hour, minute, ampm } = appointment


    return (
        <div className="row adisplay-main">
            <div className="col-5">
                <div className="adisplay adisplay-header float-left mr-3">Child: {childName}</div>
                <div className="adisplay adisplay-sub float-left mr-3">Parent: {parentName}</div>
            </div>
            <div className="col-3">
                <div className="adisplay adisplay-date float-right ml-3">{date}</div>
                <div className="adisplay adisplay-time float-right ml-3">{`${hour}:${minute} ${ampm}`}</div>
            </div>
            <div className="col-4">
                <button className="btn btn-primary">Cancel Appointment</button>
            </div>
        </div>
    );
}