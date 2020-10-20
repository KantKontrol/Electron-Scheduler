import React, { useEffect, useState } from "react";
import InputModal from "./InputModal";
import ALoader from "./ALoader";
import { accessDB } from "../util/IndexedDB";

export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: false,
        appointments: []
    });

    const setModal = function(value){
        setPageState({ ...pageState, showModal: value });
    }

    const createAppointment = function(data){
        let app = pageState.appointments; //pull from state

        console.log(app)

        app.push(data); //modify pulled data
        
        setPageState({ ...pageState, appointments: app, showModal: false }); //update state
        
        //update DB
        accessDB("appDB", "apps", "put", data);

    }


    useEffect(() => {
        accessDB("appDB", "apps", "get").then(data => {
            console.log(data)
            setPageState({ ...pageState, appointments: data});
        });
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

                <ALoader appointments={pageState.appointments} />
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={setModal} createAppointment={createAppointment}/>
        </>
    );
    
}