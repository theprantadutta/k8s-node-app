const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Handle /hello endpoint
  if (req.url === '/hello' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from the /hello endpoint!\n');
  } 
  // Default response for other endpoints
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});