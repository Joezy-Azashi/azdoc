import React, { useState, useEffect } from "react";
import AdminLogin from './forms/adminLoginForm'
import {db} from '../newFireBase';
import AdminPage from './adminpage';
import swal from 'sweetalert';

const Admin = () => {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [loader, setLoader] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassworderror("");
  }

  const clearErrors = () => {
    setEmailerror("");
    setPassworderror("");
  }

  const handleLogin = (e) => {
    clearErrors();
    setLoader(true);
    e.preventDefault();
    db
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setLoader(false);

      swal({
        icon: "success",
        text: "Signed in As Admin",
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      })
    })
    .catch (err => {
      setLoader(false);
      switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerror(err.message);
          break;
          case "auth/wrong-password":
            setPassworderror(err.message);
          break;
          
      }
    })

  }

  const handleLogOut = () =>{
    db.auth().signOut();
  };

  const authListener = () => {
    db
    .auth()
    .onAuthStateChanged( (user) => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("")
      }
    });
  };
  
  useEffect( ()=>{
    authListener();
  }, []);

  return (
    <>
      { user ? (<AdminPage handleLogOut={handleLogOut}/>) :
      (<div className="Login"><AdminLogin
      setEmail={setEmail}
      setPassword={setPassword}
      email= {email}
      password={password}
      emailerror={emailerror}
      passworderror={passworderror}
      handleLogin={handleLogin}
      loader={loader}
      /></div>)

  }
    </>
  );
}
export default Admin;