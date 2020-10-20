import React from "react";

export default function SortBar(props){

    let {sortDirection} = props;

    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Parent Name</th>
                <th scope="col">Child Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time <div className={sortDirection == "ascend" ? "sortImageUp" : "sortImageDown"}><img src="/assets/img/arrow.png" alt="arrow"></img></div></th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
    );
}