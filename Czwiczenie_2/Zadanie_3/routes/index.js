const fs = require('fs');
const path = require('path');

exports.handleHome = (res) => {
    renderView('home', res);
};

exports.handleStudent = (res) => {
    renderView('student', res);
};

const renderView = (viewName, res) => {
    const filePath = path.join(__dirname, '..', 'views', `${viewName}.js`);
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Page not found');
        } else {
            const renderPage = require(filePath).renderPage;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(renderPage(), 'utf-8');
        }
    });
};
