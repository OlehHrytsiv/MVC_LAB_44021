const http = require('http');
const { handleHome, handleStudent } = require('./routes/index');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home' && req.method === 'GET') {
        handleHome(res);
    } 
    else if (req.url === '/student' && req.method === 'GET') {
        handleStudent(res);
    }
    else if (req.url === '/student' && req.method === 'POST') {

        handleStudent(res);
    } 
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
