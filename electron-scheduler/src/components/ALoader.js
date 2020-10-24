import React from "react";
import ADisplay from "./ADisplay";
import SortBar from "./SortBar";

export default function ALoader(props){

    let { appointments, removeApp, changeDateDirection, sortDateDirection, changeTimeDirection, sortTimeDirection } = props;


    return (
        <div className="row">
            <div className="col-12">
                <table className="table adisplay-main table-striped" cellPadding={0} cellSpacing={0}>
                    <SortBar changeDateDirection={changeDateDirection} sortDateDirection={sortDateDirection} changeTimeDirection={changeTimeDirection} sortTimeDirection={sortTimeDirection} />
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