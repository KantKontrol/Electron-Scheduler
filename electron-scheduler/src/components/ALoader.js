import React from "react";
import ADisplay from "./ADisplay";
import SortBar from "./SortBar";

export default function ALoader(props){

    let { appointments, removeApp } = props;

    return (
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <SortBar />
                    <tbody>
                        {
                            appointments.length > 0 ? appointments.map(e => {
                                return <ADisplay removeApp={removeApp} appointment={e} key={e._id} />;
                            }) : <tr><th scope="row">No Data</th></tr> 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}