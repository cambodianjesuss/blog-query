const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

/**
 * Object that recieves an event, then stores it data to send only one request
 */

app.post('/events', (req, res)=>{
  console.log("Event Type Recieved in Query:", req.body.type);
  res.send({Status: "OK"});
});

app.listen(4002, ()=>{
  console.log('Query Service on 4002')
});