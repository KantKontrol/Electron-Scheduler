import React, { useEffect, useState } from "react";
import InputModal from "./InputModal";
import ALoader from "./ALoader";
import { accessDB } from "../util/IndexedDB";

export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: false,
        appointments: []
    });

    const lsDB = function(){ //this function resets appointments
        accessDB("appDB", "apps", "get").then(data => {
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

    useEffect(() => {
        lsDB();
    }, []);

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
                    <button className="btn btn-primary d-block mx-auto mt-1" onClick={() => setModal(true)}>Create Appointment</button>
                </div>

                <ALoader appointments={pageState.appointments} removeApp={removeApp}/>
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={setModal} createAppointment={createAppointment}/>
        </>
    );
    
}