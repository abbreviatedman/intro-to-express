// The way we import a library on the server side.
const express = require("express");

// `express` is actually a function,
// and it returns an object with which
// we can manage a server.
const app = express();

// The port we'll use. It's good to
// have this variable in case we want
// to change it later, so we don't have
// to hunt it down. We capitalize this
// variable to indicate to other programmers
// (it means nothing to the computer!)
// that this is a GLOBAL CONSTANT.
const PORT = 3003;

// The server object, `app`, has several
// methods. One is `.get`. It handles GET requests.
// `.get` takes two arguments:
// - a string for the route
// - a function to call (a callback!)
// When the Express server gets a request with
// the matching verb (like `get`) and the matching
// route (like "/"), it calls your callback and
// gives it two values:
// - The request.
// - The response.
// The response object has a bunch of methods
// for sending a response back to the client.
// (We'll talk about the request object later!)
app.get("/", (request, response) => {
  response.send("Hello there.");
});

// `.listen` is a basically required method to
// use on your server. It lets you open up the
// server to requests.
// It takes two arguments:
// - a number for the port to listen on.
// - a function to call back when the
//   server is up and running.
// We typically run a console log in the callback
// to let us know that it worked.
app.listen(PORT, () => {
  console.log(`Success! Listening on port: ${PORT}`);
});
