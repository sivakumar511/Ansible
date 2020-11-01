var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('AWS EC2 instance created via CloudFormation Template \n Application components installed and configured via Ansible \n Code changes applied to Application via Ansible-Pull and Cron Jobs in every 5 mins \n');
}).listen(3000);

// Console will print the message
console.log('Server running');
