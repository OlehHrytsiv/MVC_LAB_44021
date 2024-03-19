const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const renderView = (viewName, res) => {
    const filePath = path.join(__dirname, 'views', `${viewName}.js`);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Page not found');
        } else {
            // Assume the export is a function that returns HTML string
            const renderPage = require(filePath).renderPage;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderPage(), 'utf-8');
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        renderView('home', res);
    } else if (req.url === '/student') {
        renderView('student', res);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
