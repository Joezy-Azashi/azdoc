import React, { useState, useEffect } from 'react';
import { Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import * as fe from 'react-feather';
import {db} from '../newFireBase';

export default function AdminPage({handleLogOut}){
    //Get All Visitors
    const [visitors, setVisitors] = useState([]);
    const [loader, setLoader] = useState(false);

    const ref = db.firestore().collection("Visitor")
    function getVisitors() {
        setLoader(true);
        ref
          //.where('owner', '==', currentUserId)
          //.where('title', '==', 'School1') // does not need index
          //.where('score', '<=', 10)    // needs index
          //.orderBy('owner', 'asc')
          //.limit(3)
          .onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
              items.push(doc.data());
            });
            setVisitors(items);
            setLoader(false);

          });
      }
    
      useEffect(() => {
        getVisitors();
        // eslint-disable-next-line
      }, []);


    return(
<div className="adminPage">
        <div className=" container">
            <div classname="row row-content">
            <Link to="/welcome">
                <Button variant="outline-success" className=" mt-4 mr-5" style={{float: "right"}} onClick={handleLogOut}> Logout</Button>
            </Link>
            <div>
                <div className="appname">
                    <fe.Bell className="mb-4"/>
                    <h1>azdoc</h1>
                </div>
                <div className="welcomemsg"><h3>Welcome to AdminPage</h3></div>
                
               </div>
               </div>
               {loader ? <h1>Loading...</h1> : null}
                
               <div class="row row-content ">
                    <div class="col-12 col-sm-10 pr-4 justify-content-center">
                <h2>Visitor Logg</h2>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Email</th>
                                <th>Purpose</th>
                                <th>SignIn</th>
                                <th>SignOut</th>
                                <th>Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                        {visitors.map((visitor) =>(
                            <tr style={{color: "white"}}>
                                <th >{`${visitor.fname} ${visitor.lname}`}</th>
                                <td>{visitor.phone}</td>
                                <td>{visitor.company}</td>
                                <td>{visitor.email}</td>
                                <td>{visitor.purpose}</td>
                                <td>{visitor.signInTime}</td>
                                <td>{visitor.signoutTime}</td>
                                <td>{visitor.comment}</td>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>
                </div>
           </div>
    </div>
               
               
               </div>
               </div>
        
    )
}