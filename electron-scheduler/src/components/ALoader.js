import React, { useEffect, useState } from "react";
import ADisplay from "./ADisplay";
import SortBar from "./SortBar";

export default function ALoader(props){

    let { appointments, removeApp } = props;

    const [sortDateDirection, setSortDateDirection] = useState(0);
    const [sortTimeDirection, setSortTimeDirection] = useState(0);

    //must impliment sort at state holding appointment level ****
    const timeComparatorAscending = (a, b) => {

        if(a.ampm === "AM" && b.ampm === "PM")
            return -1;
        else if(a.ampm === "PM" && b.ampm === "AM")
            return 1;
        else if(a.hour === b.hour){
            if(a.minute < b.minute)
                return -1;
        }
        else if(a.hour < b.hour)
            return -1;
        else if(a.hour > b.hour)
            return 1;
        else
            return 0;
    }

    const timeComparatorDecending = (a,b) => {
        console.log({a,b})

        if(a.ampm === "AM" && b.ampm === "PM")
            return 1;
        else if(a.ampm === "PM" && b.ampm === "AM")
            return -1;
        else if(a.hour === b.hour){
            if(a.minute > b.minute)
                return -1;
        }
        else if(a.hour > b.hour)
            return -1;
        else if(a.hour < b.hour)
            return 1;
        else
            return 0;
    }

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

    useEffect(() => { //if sortDate direction changes

        if(sortDateDirection === 0)
            appointments.sort(dateComparatorAscending);
        else
            appointments.sort(dateComparatorDecending);

    }, [sortDateDirection]);

    useEffect(() => { //if sortDate direction changes

        if(sortTimeDirection === 0)
            appointments.sort(timeComparatorAscending);
        else
            appointments.sort(timeComparatorDecending);

    }, [sortTimeDirection]);

    const changeDateDirection = () => sortDateDirection === 0 ? setSortDateDirection(1) : setSortDateDirection(0);
    const changeTimeDirection = () => sortTimeDirection === 0 ? setSortTimeDirection(1) : setSortTimeDirection(0);
    

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