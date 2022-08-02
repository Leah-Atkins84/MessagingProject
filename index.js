const express = require("express"); // import express dependency
const app = express(); // initiate an express app
const port = process.env.PORT || 5000; // port number for server to listen to
const fs = require("fs"); // Import fs module


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
    console.log("Company is:", companies.company);
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
    console.log("Guest name is:", guests.FirstName);
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
    console.log("Message is:", message.FirstName);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }

});// end data from json files



//------GET route here---------------
// app.get('/', (req, res) => {
//   console.log(('request from client was made', req));
//   res.sendStatus(200);
// })

//------- start up the server---------
app.listen(port, () => {
  console.log('listening to port', port);
});