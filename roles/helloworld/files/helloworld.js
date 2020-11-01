var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('EC2 instance created and Application configured via Ansible and changes will be moniterred by Ansible-Pull for every 5 mins \n');
}).listen(3000);

// Console will print the message
console.log('Server running');
