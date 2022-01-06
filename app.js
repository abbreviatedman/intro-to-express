//The way we import a library on the server side.
const express = require('express');

//Express is a function
//Returns an object
//We can now manage the server
//The app gives you back an express object
const app = express();

//The port we'll use
//Use this variable in case we want to change it later
//PORT is a global variable and indicates to other programmers
// that this is a global constant - (please don't change)
const PORT= 3003;

//The server object 'app', has a bunch of methods
//This means handle a GET request
//app.delete() handles a DELETE request
//app.post() handles a POST request
//It takes two arguments:
// - a string for the route
// - a function to call (a callback!)
//Whenever any client send this request
//REMEMBER THIS DAMN FORMAT
//When the Express server gets a request
//it calls your callback.
//And gives it two values: 
// - The request.
// - The response.
// The response object has a bunch of methods
// For sending a request back to the client
app.get('/', (request, response) => {
    response.send('Hi, how are ya?');
});

app.get('/terminator', (request, response) => {
    response.send('I will be back')
  });

  app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })

  app.get('/Steve McGarrett', (req, res) => {
    res.send(`Book 'em Danno!`)
  })

  app.get('/Coach Taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
  })

  app.get('/Homer Simpson', (req, res) => {
    res.send(`D'Oh`)
  })

  app.get('/Bruce Banner', (req, res) => {
    res.send(`Don't make me angry`)
  })

  app.get('/JJ Evans', (req, res) => {
    res.send(`Dy-no-myte!`)
  })

  app.get('/Batman', (req, res) => {
    res.send(`To the Batmobile!`)
  })

  



// A basically required method to use on your server
// Lets you open up the server to requests.
// Takes two arguments.
// The first argument:
// - a number for the port to listen on
// - a function to callback when the server is running.
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})