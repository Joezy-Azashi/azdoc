import React from 'react'
import {Link} from 'react-router-dom';
import * as fe from 'react-feather';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AdminLogin = (props) => {
const
 {  setEmail,
    setPassword,
    email,
    password,
    emailerror,
    passworderror,
    handleLogin,
    loader
} = props

    return(
        <div className="container">
            <div className="row mt-0">
                <Link to="/welcome">
                    <fe.ArrowLeftCircle className="categoryback"/>
                </Link>
                </div>
            <div className="adminform">
                <div className="adminformDiv">
                <div className="row">
                          <div className="col-md-12 mb-4">
                            <label>Email</label><br/>
                            <input 
                            autoFocus
                            type="email"
                            value={email}
                            autoComplete="off"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="errorMsg">{emailerror}</p>
                          </div>
                          </div>
                    <div className="row">
                          <div className="col-md-12 mb-4">
                            <label>Password</label><br/>
                            <input 
                            autoFocus
                             type="password"
                             value={password}
                             autoComplete="off"
                             className="form-control"
                             onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="erroMsg">{passworderror}</p>
                          </div>
                          </div>
                          
                          <div className="row justify-content-center mt-5">
                      <div class="btn-group col-12 col-sm-6 align-self-center" role="group" >
                      <button
                        type="submit"
                        className={`${loader ? "disable" : " btn-primary" } btn-block btn-sm nav-link font-weight-bold`}
                        onClick={handleLogin}>
                        Login
                      </button>
                      </div>
                      </div>
                </div>
                
                
                     
                
                
            
            </div>
        </div>

    )
}

export default AdminLogin