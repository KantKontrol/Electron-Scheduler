import React, { useEffect, useState } from "react";
import InputModal from "./InputModal";
import ALoader from "./ALoader";
import { accessDB } from "../util/IndexedDB";

export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: false,
        appointments: []
    });

    const lsDB = function(){
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

    console.log(pageState.appointments)
    return (
        <>
            <div className="container-fluid">
                
                <div className="row mx-auto main-page-header">
                    <h1 className="main-page-header-text my-auto d-block">Electron Scheduler</h1>
                    
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