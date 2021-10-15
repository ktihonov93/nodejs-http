const http = require('http');

const url = require('url');

const port = 8000;

const requestHandler = (request, response) => {

  // The URL we want to parse ( parse === analyse)
  const myUrl = `${request.url}`;

// Check URL doc for the meaning of parameters
  const parsedUrl = new URL(myUrl,'http://localhost:8000');

  if(parsedUrl.searchParams.has('name') && parsedUrl.searchParams.has('city')){

    console.log(request.url);

    response.end(`Hello ${parsedUrl.searchParams.get('name')} from ${parsedUrl.searchParams.get('city')}!`);

  }else{
    response.end('Please provide name AND city parameters')
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {

    if (err) {  
      console.error('Something bad happened');  
    } else {  
      console.log(`server is listening on ${port}`);  
    }
  
  });