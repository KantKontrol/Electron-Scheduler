import React, { useState } from "react";
import InputModal from "./InputModal";


export default function MainPage(){

    const [pageState, setPageState] = useState({
        showModal: true,
        setModal: function(value){
            setPageState({ ...pageState, showModal: value });
        }
    });

   
    return (
        <>
            <div className="container-fluid">
                
                <div className="row mx-auto main-page-header">
                    <h1 className="main-page-header-text my-auto">Electron Scheduler</h1>
                </div>

                <div className="row">
                    
                </div>
            
            </div>
            <InputModal showModal={pageState.showModal} setModal={pageState.setModal}/>
        </>
    );
    
}