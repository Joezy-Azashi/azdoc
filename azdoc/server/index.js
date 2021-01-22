const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const mailjet = require('node-mailjet'); //sendgrid library to send emails 

const app = express(); //alias from the express function

// //sendgrid api key
// sgMail.connect('07f27d94e92be948eb0711143f1a2b42', '06463f4224124c8ed4bdbec92e3977e6');

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// // Welcome page of the express server: 
app.get('/', (req, res) => {
    res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.get('/send-email', (req,res) => {
  const { name,recipient, purpose} = req.query;
  const mailjet = require ('node-mailjet')
.connect('07f27d94e92be948eb0711143f1a2b42', '06463f4224124c8ed4bdbec92e3977e6')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "vincent.aboagye@amalitech.org",
        "Name": "Vincent"
      },
      "To": [
        {
          "Email": recipient,
          "Name": name
        }
      ],
      "Subject": "You have a visitor",
      "TextPart": "Visitor is in the lobby",
      "HTMLPart": "<h1>AMALITECH VISITORS APP</h1><br/><h3>You have a visitor <br /><h4>Purpose: "+purpose+"</>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
  res.send("Email Sent")
  
})
app.listen(4000, () => console.log("Running on Port 4000")); 