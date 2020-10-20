import React from "react";

export default function SortBar(props){

    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Parent Name</th>
                <th scope="col">Child Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
    );
}