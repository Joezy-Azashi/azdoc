import React, {useState} from 'react';
import {Link} from 'react-router-dom'


export default function Categorypage(){

    return(
        <>
    
        <div className="container">
        
        <div className="iam">
            <h1>I am: </h1>
        </div>
        <div>
            <div className="row mb-4">
                <Link to="/visitorform" className="col-md-6 btn-group categorybutton mb-4">
                    
                    <a role="button"  className="btn btn-primary btn-block nav-link categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Visitor</h6></a>
                </Link>
                <div className="col-md-6 btn-group categorybutton">
                    <a href="" role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Business</h6></a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 btn-group categorybutton mb-4">
                    <a href="" role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Contractor</h6></a>
                </div>
                <div className="col-md-6 btn-group categorybutton">
                    <a href="" role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">Making a delivery</h6></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}