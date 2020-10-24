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
        appointments: [],
        cAppointments: [],
        renderCompleted: false
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
        accessDB("appDB", "apps", "getByID", { _id: id}).then(data => {
            accessDB("cAppDB", "apps", "put", data);
            accessDB("appDB", "apps", "delete", { _id: id});
            lsDB();
        });
    }

    const showComplete = function(){ 
        accessDB("cAppDB", "apps", "get").then(data => {

            data.sort(cHelp.timeComparatorAscending);
            let rc = pageState.renderCompleted;

            setPageState({ ...pageState, cAppointments: data, renderCompleted: !rc });
        });
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

                    <div className="col-md-3 col-lg-4"></div>

                    <div className="col-md-6 col-lg-4">
                       
                            <button className="btn btn-primary d-inline-block mt-2 mb-2 float-left" onClick={() => setModal(true)}>Create Appointment</button>
                            <button className="btn btn-primary d-inline-block mt-2 mb-2 float-right" onClick={() => showComplete()}>{ pageState.renderCompleted ? "Show Current" : "Show Completed"}</button>
                
                    </div>
                    
                   
                    <div className="col-md-3 col-lg-4"></div>
                </div>

                {
                    pageState.renderCompleted ? <ALoader appointments={pageState.cAppointments} changeDateDirection={changeDateDirection} sortDateDirection={sortDateDirection} changeTimeDirection={changeTimeDirection} sortTimeDirection={sortTimeDirection} />
                    :
                    <ALoader appointments={pageState.appointments} removeApp={removeApp} completeApp={completeApp} changeDateDirection={changeDateDirection} sortDateDirection={sortDateDirection} changeTimeDirection={changeTimeDirection} sortTimeDirection={sortTimeDirection} />
                }

            </div>
            <InputModal showModal={pageState.showModal} setModal={setModal} createAppointment={createAppointment}/>
        </>
    );
    
}