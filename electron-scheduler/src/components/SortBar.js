import React from "react";

export default function SortBar(props){

    let {sortDateDirection, changeDateDirection, sortTimeDirection} = props;

    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Parent Name</th>
                <th scope="col">Child Name</th>
                <th scope="col">Date <div className={sortDateDirection == "ascend" ? "sortImageUp" : "sortImageDown"} onClick={() => changeDateDirection()}><img src="/assets/img/arrow.png" alt="arrow"></img></div></th>
                <th scope="col">Time <div className={sortTimeDirection == "ascend" ? "sortImageUp" : "sortImageDown"}><img src="/assets/img/arrow.png" alt="arrow"></img></div></th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
    );
}