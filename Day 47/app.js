const http = require("http");



// request is ref to the incoming request
// response is ref to the outgoing response
function handleRequest(request, response) {
  // console.log(request.url); // log the request URL to the console
  
  if (request.url === '/currenttime') {
    response.statusCode = 200; // HTTP status code meaning OK
    response.end( "<h1>" + new Date().toISOString() + "</h1>" ); // end the response with HTML content

  } else if (request.url === "/") {
    response.statusCode = 200; // HTTP status code meaning OK
    response.end("<h1>Hello World</h1>"); // end the response with HTML content

  }

}


const server = http.createServer(handleRequest);

server.listen(3000);
