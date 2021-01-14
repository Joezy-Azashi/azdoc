import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {db} from '../../newFireBase';

const Admin = () => {
  const [user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [hasaccount, setHasaccount] = useState("");

  const handleLogin = () => {
    db
    .auth()
    .signinWithEmailAndPassword(email, password)
    .catch (err => {
      switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerror(err.message);
            break;
      }
    })

  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <FormGroup size="lg" controlId="email">
          <Label>Email</Label>
          <Input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup size="lg" controlId="password">
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Admin;