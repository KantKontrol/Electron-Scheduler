import React, { useEffect, useState } from "react";
import InputModal from "./InputModal";
import ALoader from "./ALoader";
import { accessDB } from "../util/IndexedDB";
import cHelp from "../util/cHelper.js";

export default function MainPage(){

    //states for sorting
    const [sortDateDirection, setSortDateDirection] = useState(0);
    const [sortTimeDirection, setSortTimeDirection] = useState(0);

    const [pageState, setPageState] = useState({
        showModal: false,
        appointments: []
    });

    const lsDB = function(){ //this function resets appointments
        accessDB("appDB", "apps", "get").then(data => {

            data.sort(cHelp.timeComparatorAscending);

            setPageState({ ...pageState, appointments: data, showModal: false});
        });
    }

    const setModal = function(value){
        setPageState({ ...pageState, showModal: value });
    }

    const createAppointment = function(data){
        //update DB
        accessDB("appDB", "apps", "put", data);

        lsDB(); 
    }

    const removeApp = function(id){
        accessDB("appDB", "apps", "delete", { _id: id});
        lsDB();
    }

    const completeApp = function(id){
        accessDB("appDB", "apps", "get", { _id: id}).then(data => {
            console.log(data);
        })
    }

    useEffect(() => {
        lsDB();
    }, []);

    const changeDateDirection = () => {

        sortDateDirection === 0 ? setSortDateDirection(1) : setSortDateDirection(0);

        let newAppSort = pageState.appointments;

        if(sortDateDirection === 0)
            newAppSort.sort(cHelp.dateComparatorAscending);
        else
            newAppSort.sort(cHelp.dateComparatorDecending);

        setPageState({ ...pageState, appointments: newAppSort});
    }

    const changeTimeDirection = () => {

        sortTimeDirection === 0 ? setSortTimeDirection(1) : setSortTimeDirection(0);

        let newAppSort = pageState.appointments;

        if(sortTimeDirection === 0)
            newAppSort.sort(cHelp.timeComparatorAscending);
        else
            newAppSort.sort(cHelp.timeComparatorDecending);

        setPageState({ ...pageState, appointments: newAppSort});
    }
    

    return (
        <>
            <div className="container-fluid">
                
                <div className="row mx-auto main-page-header">
                    <div className="col-12 my-auto">
                        <h1 className="main-page-header-text d-block">Electron Scheduler</h1>
                        <h5 className="main-page-header-text d-block">© Nicholas DeRissio 2020</h5>
                    </div>
                </div>

                <div className="row">
                    <button className="btn btn-primary d-block mx-auto mt-2 mb-2" onClick={() => setModal(true)}>Create Appointment</button>
                </div>

               

                <ALoader appointments={pageState.appointments} removeApp={removeApp} completeApp={completeApp} changeDateDirection={changeDateDirection} sortDateDirection={sortDateDirection} changeTimeDirection={changeTimeDirection} sortTimeDirection={sortTimeDirection} />
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={setModal} createAppointment={createAppointment}/>
        </>
    );
    
}