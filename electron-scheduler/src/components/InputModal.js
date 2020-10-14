import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import DP from "./DP";


const hours = [ 1,2,3,4,5,6,7,8,9,10,11,12 ];
const minutes = [];

for(let i=1;i <= 60;i++){
    minutes.push(i);
}

export default function InputModal(props){

    const { setModal, showModal, createAppointment } = props;


    const [aData, setAData] = useState({
        parentName: "",
        childName: "",
        hour: 0,
        minute: 0,
        ampm: "AM"
    });

    const setName = (e) => {
        let {name, value} = e.target;
        setAData({ ...aData, [name]: value });
    }

    console.log(aData);

    //add DATE, submit appointment, clear input state, display appointment, save appointment
    //https://www.npmjs.com/package/react-bootstrap-date-picker

    return (
        <Modal show={showModal}>
            <Modal.Header>Appointment Information</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Parent Name"
                    aria-label="ParentName"
                    aria-describedby="basic-addon1"
                    name="parentName"
                    value={aData.parentName}
                    onChange={setName}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Child Name"
                    aria-label="ChildName"
                    aria-describedby="basic-addon1"
                    name="childName"
                    value={aData.childName}
                    onChange={setName}
                    />
                </InputGroup>
                <DP />
                <div className="mx-auto">
                    <Form.Group className="w-25 d-inline-block" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Hour</Form.Label>
                        <Form.Control as="select" multiple>
                            {
                                hours.map(e => {
                                return <option onClick={() => setAData({...aData, hour: e})} key={e}>{e}</option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="w-25  d-inline-block" controlId="exampleForm.ControlSelect2">
                        <Form.Label>Minute</Form.Label>
                        <Form.Control as="select" multiple>
                            {
                                minutes.map(e => {
                                    return <option onClick={() => setAData({...aData, minute: e})} key={e}>{e}</option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="w-25  d-inline-block" controlId="exampleForm.ControlSelect2">
                        <Form.Control as="select" multiple>
                            <option onClick={() => setAData({...aData, ampm: "AM"})} key={"AM"}>AM</option>
                            <option onClick={() => setAData({...aData, ampm: "PM"})} key={"PM"}>PM</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={() => createAppointment()}>Submit</button>
                <button className="btn btn-secondary" onClick={() => setModal(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}