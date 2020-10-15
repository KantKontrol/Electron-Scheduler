import React from "react";
import ADisplay from "./ADisplay";

export default function ALoader(props){

    let { appointments } = props;


    return (
        <div className="row">
            <div className="col-12">
                {
                    appointments.length > 0 ? appointments.map(e => {
                        return <ADisplay appointment={e} key={e.parentName}/>;
                    }) : <div></div> 
                }
            </div>
        </div>
    );
}