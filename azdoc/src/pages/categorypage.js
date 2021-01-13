import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as fe from 'react-feather';


export default function Categorypage(){

    return(
        <>
    
        <div className="container">
        <div>
            <Link to="/welcome">
                <fe.ArrowLeftCircle className="categoryback"/>
            </Link>
        </div>
        <div className="iam">
            <h1>I am: </h1>
        </div>
        <div>
            <div className="row mb-4">
                <Link to="/category/visitorform" className="col-md-6 btn-group categorybutton mb-4">
                    
                    <a role="button"  className="btn btn-primary btn-block nav-link categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Visitor</h6></a>
                </Link>
                <Link to="/category/businessform" className="col-md-6 btn-group categorybutton mb-4">
                    <a role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Business</h6></a>
                </Link>
            </div>
            <div className="row">
                <Link to="/category/contractorform" className="col-md-6 btn-group categorybutton mb-4">
                    <a  role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">A Contractor</h6></a>
                </Link>
                <Link to="/category/deliveryform" className="col-md-6 btn-group categorybutton">
                    <a role="button" className="btn btn-primary btn-block nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">Making a delivery</h6></a>
                </Link>
            </div>
        </div>
        </div>
        </>
    )
}