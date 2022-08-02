const express = require("express"); // import express dependency
const app = express(); // initiate an express app
const port = process.env.PORT || 5000; // port number for server to listen to

/* Serve up static files (HTML, CSS...)*/
app.use(express.static("server/public"));

//------GET route here---------------
app.get('/', (req, res) => {
  console.log(('request from client was made', req));
  res.sendStatus(200);
})

//------- start up the server---------
app.listen(port, () => {
  console.log('listening to port', port);
});