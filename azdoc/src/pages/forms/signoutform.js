import React,{ useState} from 'react';
import * as fe from 'react-feather';
import {Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import {db} from '../../newFireBase';
import swal from 'sweetalert';
import history from '../../history';


const Signout = (props) =>{
    const [visitorId, setVisitorId] = useState("");
    const [comment, setComment] = useState("");
    const [loader, setLoader] = useState(false);
    const [timestamp, setTimestamp] = useState(new Date().toLocaleString());
 
    const handleHistory = ()=> history.push('/welcome');
    const ref = db.firestore().collection("Visitor")
    
    const handleSubmit = (e) => {
         e.preventDefault();
    setLoader(true);
    ref.doc(visitorId).update({
      signoutTime: timestamp,
      comment: comment
    })
    .then(() => {
      setLoader(false);

      swal({
        icon: "success",
        text: "Sign Out Successful",
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
      
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    setVisitorId("");
    setComment("");

    }
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
                    <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Col md={12} mb={4}>
                                <Label htmlFor="visitorId">VisitorId</Label><br/>
                                <Input type="text" id="visitorId" name="visitorId" className="form-control nameinput" value={visitorId}
                                onChange={(e) => setVisitorId(e.target.value)}/>
                        </Col>
                        </FormGroup>
                     <FormGroup row>
                     <Col md={12} mb={4}>
                            <Label htmlFor="comment">Comment</Label><br/>
                            <Input
                            rows="5"
                            type="textarea" className="form-control nameinput formtextarea"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}/>
                        </Col>
                        </FormGroup>
                    
                    <FormGroup row className="justify-content-center mt-5">
                    <div class="btn-group col-12 col-sm-3 align-self-center" role="group" >
                      <button
                        type="submit"
                        className={`${loader ? "disable" : " btn-primary" } btn-block btn-sm nav-link font-weight-bold`}>
                        OK
                      </button>
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
export default Signout