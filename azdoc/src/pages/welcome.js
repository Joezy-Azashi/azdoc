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
                <a href="/categorypage" className="touchtostart"><h6>PRESS HERE TO START</h6></a>
            </div>
        </div>
       </div>
        
    )
}