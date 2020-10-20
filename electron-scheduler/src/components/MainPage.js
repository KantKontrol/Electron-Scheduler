import React, { useEffect, useState } from "react";
import InputModal from "./InputModal";
import ALoader from "./ALoader";
import JSONhandler from "../util/JSONhandler";

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

    useEffect(() => {
        JSONhandler.loadData((err, data) => {
            if (err) throw err;
            data = JSON.parse(data)
            setPageState({ ...pageState, appointments: data });
        })
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

                <ALoader appointments={pageState.appointments} />
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={pageState.setModal} createAppointment={pageState.createAppointment}/>
        </>
    );
    
}