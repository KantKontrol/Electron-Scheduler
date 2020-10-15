import React from "react";


export default function ALoader(props){

    let { appointment } = props;


    return (
        <div className="row">
            <div className="col-12">
                <h1>{appointment.childName}</h1>
                <h2>{appointment.parentName}</h2>
            </div>
        </div>
    );
}