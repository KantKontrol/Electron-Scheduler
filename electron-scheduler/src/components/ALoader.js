import React from "react";
import ADisplay from "./ADisplay";

export default function ALoader(props){

    let { appointments, removeApp } = props;

    return (
        <div className="row">
            <div className="col-12">
                {
                    appointments.length > 0 ? appointments.map(e => {
                        return <ADisplay removeApp={removeApp} appointment={e} key={e._id} />;
                    }) : <div></div> 
                }
            </div>
        </div>
    );
}