const http = require('http');
const { handleHome, handleStudent } = require('./routes/index');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        handleHome(req, res);
    } else if (req.url === '/student') {
        handleStudent(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

