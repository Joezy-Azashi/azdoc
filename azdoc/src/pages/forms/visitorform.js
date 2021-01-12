import React from 'react';
import * as fe from 'react-feather';

export default function Visitor(props){
    return(
        <div>
            <div className="container">
            <div className="mainform">
                <div>
                    <fe.XCircle className="mb-2" style={{float: "right"}}/>
                </div>
                  <div>
                    <h3 className="">
                      Visitor Form
                    </h3>
                  </div>
                  <br />
                  <form>
                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>Name</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>

                          <div className="col-md-6">
                          <label>Company</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>Phone</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>

                          <div className="col-md-6 mb-4">
                            <label>Email</label><br/>
                            <input type="text" className="form-control nameinput"/>
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                            <label>Purpose</label><br/>
                            <textarea
                            rows="5"
                            type="text" className="form-control nameinput formtextarea"/>
                        </div>
                      </div>
                  </form>
                  <div className="row justify-content-center mt-5">
                    <div class="btn-group col-12 col-sm-3 align-self-center okbtn" role="group" id="reserveButton"  >
                        <a role="button" class="btn btn-primary btn-block btn-sm nav-link font-weight-bold ">
                        OK
                         </a>
                    </div>
                    <div class="btn-group col-12 col-sm-3 align-self-center" role="group" id="reserveButton"  >
                        <a role="button" class="btn btn-danger btn-block btn-sm nav-link font-weight-bold ">
                        Cancel
                        </a>
                    </div>
                  </div>
            </div>
            </div>
      </div>      
    );
}