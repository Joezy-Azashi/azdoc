import { Modal } from "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

export default function Visitor(props){
    return(
        <div>
            <div className="container">
            <div className="mainform">
                  <div>
                    <h3 className="">
                      Visitor Form
                    </h3>
                  </div>
                  <br />
                  <form>
                      <div className="row">
                          <div className="col-md-6">
                            <label>Name</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>

                          <div className="col-md-6">
                          <label>Company</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6">
                            <label>Phone</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>

                          <div className="col-md-6">
                          <label>Email</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                      </div>
                  </form>
            </div>
            </div>
      </div>      
    );
}