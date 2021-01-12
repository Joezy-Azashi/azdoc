import React from 'react';
import * as fe from 'react-feather';
import { Link } from 'react-router-dom'


export default function Welcome(){
    return(
        <div className="welcomepage">
            <div>
                <div className="appname">
                    <fe.Bell className="mb-4"/>
                    <h1>azdoc</h1>
                </div>
                <div className="welcomemsg"><h3>Welcome to Amalitech</h3></div>
                <Link to="/category" className="touchtostart"><h6>PRESS HERE TO START</h6></Link>
            </div>
       </div>
        
    )
}