const http = require ('http');
const fs = require ('fs');

const port = 3000;

const server = http.createServer((req, res)=>{

  fs.readFile('<./src/path>', (err, data)=>{

    if (err) { console.error(err); return; }

    //responses:

    res.statusCode = 200;

    res.end(data);

  });

});


//Listening for requests

server.listen(port, ()=>{

  console.log(`server listening on ${port}...`);

});
