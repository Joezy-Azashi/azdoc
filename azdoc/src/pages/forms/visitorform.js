import React, { useState} from 'react';
import * as fe from 'react-feather';
import {Link} from 'react-router-dom';
import {db} from '../../newFireBase';
import swal from 'sweetalert';
import history from '../../history';

const Visitor = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [employee, setEmployee] = useState("");
  const [employeeMail, setEmployeeMail] = useState("");
  const [timestamp, setTimestamp] = useState(new Date().toLocaleString());

  const ref = db.firestore().collection("Visitor");

  const [loader, setLoader] = useState(false);

  const handleHistory = ()=> history.push('/welcome')

  const sendEmail = ()=> {
    // const { email } = this.state;
    fetch(`http://localhost:4000/send-email?recipient=${employeeMail}&name=${employee}&purpose=${purpose}`) //query string url
      .catch(err => console.error(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    ref.doc(phone).set({
      fname: fname,
      lname: lname,
      toVisit: employee,
      company: company,
      phone: phone,
      email: email,
      purpose: purpose,
      signInTime: timestamp,
      signoutTime: "",
      comment: ""
    })
    .then(() => {
      setLoader(false);
      

      swal({
        icon: "success",
        text: "Details have been submitted",
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      })
      
      .then(()=>{
        handleHistory();
        
      })

      sendEmail();
    })
    .catch((error) => {
    
      setLoader(false);
    });

    setFname('');
    setLname('');
    setCompany('');
    setPhone('');
    setEmail('');
    setPurpose('');

   
  };

    return(
        <div>
            <div className="container">
            <div className="mainform">
                <div>
                <Link to="/category">
                    <fe.XCircle className="mb-2" style={{float: "right"}}/>
                    </Link>
                </div>
                  <div>
                    <h3>
                      {props.name} 
                    </h3>
                  </div>
                  <br />
                  <form onSubmit={handleSubmit}>
                  <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>First Name</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={fname}
                            onChange={(e) => setFname(e.target.value) }
                            />
                          </div>

                          <div className="col-md-6">
                          <label>Last Name</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>To Visit</label><br/>
                            <select className="form-select" aria-label="Default select example"
                            onChange={(e)=>{setEmployeeMail(e.target.value)}}>
                              <option value="Enter Name">Enter Name</option>
                            {props.employee.map((employee)=>{
                              return(<option key={employee.id} value={employee.email}
                                   
                                >
                                {employee.name}
                                </option>)                              
                            })}
                            </select>
                            
                          </div>

                          <div className="col-md-6">
                          <label>Company</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>Phone</label><br/>
                            <input type="number" placeholder="eg. 020 000 0000" className="form-control nameinput"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6 mb-4">
                            <label>Email</label><br/>
                            <input type="email" className="form-control nameinput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                            <label>Purpose</label><br/>
                            <textarea
                            rows="5"
                            type="text" className="form-control nameinput formtextarea"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row justify-content-center mt-5">
                      <div class="btn-group col-12 col-sm-3 align-self-center" role="group" >
                      <button
                        type="submit"
                        className={`${loader ? "disable" : " btn-primary" } btn-block btn-sm nav-link font-weight-bold`}>
                        Submit
                      </button>
                      </div>
                    <div className="btn-group col-12 col-sm-3 align-self-center" role="group"   >
                        <a href="/category" role="button" className ="btn btn-danger btn-block btn-sm nav-link font-weight-bold ">
                        Cancel
                        </a>
                    </div>
                  </div>
                  </form>
            </div>
            </div>
           
      </div>  
         
    );
} 

export default Visitor;