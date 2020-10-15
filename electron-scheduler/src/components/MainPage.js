import React, { useState } from "react";
import InputModal from "./InputModal";


export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: React.createRef(),
        appointments: [],
        setModal: function(value){
            setPageState({ ...pageState, showModal: value });
        },
        createAppointment: function(data){
            console.log(data)
            setPageState({ ...pageState, showModal: false });
        }
    });

   
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