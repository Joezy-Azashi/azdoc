import { Modal } from "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

export default function Visitor(props){
    return(
            <Modal {...props}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Visitor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                    <form>
                                <div class="form-group row">                   
                                </div>
                                <div class="form-group row mt-4">                                 
                                </div>
                                <div class="form-row mt-4">                                   
                                </div>
                                <div class="form-row mt-4">                                   
                                </div>                              
                            </form> 
                    </div>
                </Modal.Body>
            </Modal>

                      
    );
}