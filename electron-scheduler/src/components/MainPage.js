import React, { useState } from "react";
import InputModal from "./InputModal";


export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: false,
        appointments: [],
        setModal: function(value){
            setPageState({ ...pageState, showModal: value });
        },
        createAppointment: function(data){ //add appointments to appointment array here

            let app = pageState.appointments; //pull from state

            app.push(data); //modify pulled data

            setPageState({ ...pageState, appointments: app, showModal: false }); //update state
        }
    });
    console.log(pageState.appointments)
   
    return (
        <>
            <div className="container-fluid">
                
                <div className="row mx-auto main-page-header">
                    <h1 className="main-page-header-text my-auto d-block">Electron Scheduler</h1>
                    
                </div>

                <div className="row">
                    <button className="btn btn-primary d-block mx-auto mt-1" onClick={() => pageState.setModal(true)}>Create Appointment</button>
                </div>
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={pageState.setModal} createAppointment={pageState.createAppointment}/>
        </>
    );
    
}