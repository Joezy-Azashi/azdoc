import React from 'react';
import Mainlayout from '../components/Mainlayout/Header';
import * as fe from 'react-feather';
import Categorypage from '../pages/categorypage'



export default function Welcome(){
    return(
        <div className="welcomepage">
        <Mainlayout />
        <div>
            <div>
                <div className="appname">
                    <fe.Bell className="mb-4"/>
                    <h1>azdoc</h1>
                </div>
                <div className="welcomemsg"><h3>Welcome to Amalitech</h3></div>

                <div className="row mb-4">
                <div className=" btn-group categorybutton mb-4">
                    
                    <a href="/Welcome" role="button" className="btn btn-primary nav-link categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">Sign in</h6></a>
                </div>
                <div className="btn-group categorybutton">
                    <a href="" role="button" className="btn btn-primary nav-link font-weight-bold categorybutton">
                        <h6 className="font-weight-bold categorytext mt-2">Sign out</h6></a>
                </div>
            </div>
            </div>
        </div>
       </div>
        
    )
}