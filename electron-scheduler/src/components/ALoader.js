import React, { useEffect, useState } from "react";
import ADisplay from "./ADisplay";
import SortBar from "./SortBar";

export default function ALoader(props){

    const [sortDateDirection, setSortDateDirection] = useState("ascend");

    let { appointments, removeApp } = props;

    //add time sort here

    const dateComparatorAscending = (a, b) => {
        if(a.date < b.date)
            return -1;
        else if(a.date > b.date)
            return 1;
        else
            return 0;
    }

    const dateComparatorDecending = (a,b) => {
        if(a.date > b.date)
            return -1;
        else if(a.date < b.date)
            return 1;
        else
            return 0;
    }
    
    const runSortDate = () => {
        appointments.sort(dateComparatorAscending);
        console.log(appointments);
    }

    useEffect(() => { //if sortDate direction changes
        
        if(sortDateDirection === "ascend")
            appointments.sort(dateComparatorAscending);
        else
            appointments.sort(dateComparatorDecending);

    }, [sortDateDirection]);

    const changeDateDirection = () => sortDateDirection === "ascend" ? setSortDateDirection("descend") : setSortDateDirection("ascend");
    

    return (
        <div className="row">
            <div className="col-12">
                <table className="table adisplay-main table-striped" cellPadding={0} cellSpacing={0}>
                    <SortBar changeDateDirection={changeDateDirection} sortDateDirection={sortDateDirection} />
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