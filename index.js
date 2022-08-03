const { json } = require("express");
const express = require("express"); // import express dependency
const app = express(); // initiate an express app
const port = process.env.PORT || 5000; // port number for server to listen to
const fs = require("fs"); // Import fs module
const moment = require("moment"); // import moment.js

let files = {
  companies: {},
  guests: {},
  messages: {}
}

/* Serve up static files (HTML, CSS...)*/
app.use(express.static("server/public"));

/*------------Use data from json files------------------------*/
fs.readFile("./Companies.json", (err, jsonString) => {
  if(err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const companies = JSON.parse(jsonString);
    files.companies = companies;
    console.log("Companies:", companies);
  } catch (err){
    console.log("Error parsing json string:", err);
  }
});

fs.readFile("./Guests.json", (err, jsonString) => {
  if(err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const guests = JSON.parse(jsonString);
    files.guests = guests;
    console.log("Guests:", guests);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }

});

fs.readFile("./Messages.json", (err, jsonString) => {
  if(err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const message = JSON.parse(jsonString);
    files.messages = message;
    console.log("Message is:", message);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }

});// end data from json files

/*------- generate messages based on times-------- */
function greeting(){
  let tod = "";
  let morning = moment('08:00am', 'hh:mma');
  let noon = moment('11:59am', 'hh:mma');
  let evening = moment('17:59am', 'hh:mma');
  let night = moment('11:59pm', 'hh:mma');
  let currentTime = moment();

  if(currentTime.isBefore(noon) && currentTime.isAfter(morning)){
    tod = 'morning';
  }
  if(currentTime.isBefore(evening) && currentTime.isAfter(noon)){
    tod = 'afternoon';
  }
  if(currentTime.isBefore(night) && currentTime.isAfter(evening)){
    tod = 'evening';
  }
  else(currentTime.isAfter(night))
  tod = 'night';
  
  return `Good ${tod}`;
  
}

//------GET route for display messages here---------------
app.get('/message/:message/company/:companyId/guests/:guestId', (req, res) => {
  const greetingMsg = greeting();
  const guestName = files.guests.find(guest => guest.id == req.params.guestId)['firstName'];
  const message = files.messages.find(message => message.id == req.params.message);

  const finalMessage = `${greetingMsg} ${guestName}, ${message ? message.text : req.params.message}`;

  res.send(finalMessage);
});


//------- start up the server---------
app.listen(port, () => {
  console.log('listening to port', port);
});