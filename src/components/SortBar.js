import React from "react";

export default function SortBar(props){

    let {sortDateDirection, changeDateDirection, sortTimeDirection, changeTimeDirection, renderCompleted, removeAllCApp} = props;

    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Parent Name</th>
                <th scope="col">Child Name</th>
                <th scope="col">Date <div onClick={() => changeDateDirection()} style={{ display: "inline", maxWidth: "30px"}}><img className={sortDateDirection === 0 ? "sortImageUp" : "sortImageDown"} src="/assets/img/arrow.png" alt="arrow"></img></div></th>
                <th scope="col">Time <div onClick={() => changeTimeDirection()} style={{ display: "inline", maxWidth: "30px"}}><img className={sortTimeDirection === 0 ? "sortImageUp" : "sortImageDown"} src="/assets/img/arrow.png" alt="arrow"></img></div></th>
                <th scope="col">{ renderCompleted ? <button className="btn btn-primary" onClick={() => removeAllCApp()}>Remove All</button>: "Complete"}</th>
            </tr>
        </thead>
    );
}