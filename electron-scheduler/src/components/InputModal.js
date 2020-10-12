import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";


export default function InputModal(props){

    const { setModal, showModal } = props;

    const hours = [ 1,2,3,4,5,6,7,8,9,10,11,12 ];
    const minutes = [];

    for(let i=1;i <= 60;i++){
        minutes.push(i);
    }

    return (
        <Modal show={showModal}>
            <Modal.Header>Appointment Information</Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Parent Name"
                    aria-label="ParentName"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Child Name"
                    aria-label="ChildName"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Form.Group className="w-25 d-inline-block" controlId="exampleForm.ControlSelect2">
                    <Form.Label>Hour</Form.Label>
                    <Form.Control as="select" multiple>
                        {
                            hours.map(e => {
                               return <option key={e}>{e}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group className="w-25  d-inline-block" controlId="exampleForm.ControlSelect2">
                    <Form.Label>Minute</Form.Label>
                    <Form.Control as="select" multiple>
                        {
                            minutes.map(e => {
                                return <option key={e}>{e}</option>
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group className="w-25  d-inline-block" controlId="exampleForm.ControlSelect2">
                    <Form.Control as="select" multiple>
                        <option key={"AM"}>AM</option>
                        <option key={"PM"}>PM</option>
                    </Form.Control>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={() => setModal(true)}>Submit</button>
                <button className="btn btn-secondary" onClick={() => setModal(false)}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}