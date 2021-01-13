import React, {Component, useState} from 'react';
import * as fe from 'react-feather';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

class Signout extends Component{
    constructor(props){
        super(props);

        this.state = {
            visitorId: '',
            comment: ''
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event){
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div className="container">
                <div className="mainform">
                    <div>
                    <Link to="/">
                        <fe.XCircle className="mb-2" style={{float: "right"}}/>
                        </Link>
                    </div>
                      <div>
                        <h3 className="">
                          Sign Out
                        </h3>
                      </div>
                      <br />
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Col md={12} mb={4}>
                                <Label htmlFor="visitorId">VisitorId</Label><br/>
                                <Input type="text" id="visitorId" name="visitorId" className="form-control nameinput" value={this.state.visitorId}
                                onChange={this.handleInputChange}/>
                        </Col>
                        </FormGroup>
                     <FormGroup row>
                     <Col md={12} mb={4}>
                            <Label htmlFor="comment">Comment</Label><br/>
                            <Input
                            rows="5"
                            type="textarea" className="form-control nameinput formtextarea"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleInputChange}></Input>
                        </Col>
                        </FormGroup>
                    
                    <FormGroup row className="justify-content-center mt-5">
                        <div class="btn-group col-12 col-sm-3 align-self-center okbtn" role="group" id="reserveButton"  >
                            <a role="button" type="submit" class="btn btn-primary btn-block btn-sm nav-link font-weight-bold ">
                            OK
                             </a>
                        </div>
                        <div class="btn-group col-12 col-sm-3 align-self-center" role="group" id="reserveButton"  >
                            <a href="/" role="button" class="btn btn-danger btn-block btn-sm nav-link font-weight-bold ">
                            Cancel
                            </a>
                        </div>
                      </FormGroup>
                      </Form>
                
            </div>
        </div>
    </div>
        )
    }
   
    
}
export default Signout