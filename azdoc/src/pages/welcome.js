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
                <div class="btn-group col-12 col-sm-3 align-self-center okbtn" role="group" id="reserveButton"  >
                    <a href="/category" role="button" class="btn btn-primary btn-block btn-sm nav-link font-weight-bold ">
                        Sign in
                    </a>
                </div>
                <div class="btn-group col-12 col-sm-3 align-self-center okbtn" role="group" id="reserveButton"  >
                    <a role="button" class="btn btn-warning btn-block btn-sm nav-link font-weight-bold ">
                        Sign Out
                    </a>
                </div>
            </div>
       </div>
        
    )
}